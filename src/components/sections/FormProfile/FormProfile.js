import { useState, Fragment } from 'react';
import { Form, Header, Text, FormField, ButtonField, Button } from 'style/sections/FormProfile-styled';
import { Notification, Success, Close } from 'style/sections/FormProfile-styled';

import GeneralInput from './GeneralInput';
import SelectInput from './SelectInput';

const FormProfile = (props) => {
  const [userData, setUserData] = useState({
    name: '', birthdate: '', education: '', phone: '', git: '', insta: '', email: '', avatar: '', });
  const [notification, setNotification] = useState(null);

  const changeHandler = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const avatarChangeHandler = (event) => {
    if (event.target.files.length > 0) {
      let src = URL.createObjectURL(event.target.files[0]);
      setUserData({
        ...userData,
        [event.target.name]: src,
      });
    }
  };
  const closeHandler = () => {
    setNotification(null);
  };
  const submitHandler = (event) => {
    // Prevent from form submission to server
    event.preventDefault();
    setNotification(true);
    // Gather all data from input
    props.onSubmitData(userData);
    setUserData({name: '', birthdate: '', education: '', phone: '', git: '', insta: '', email: '', avatar: '',});
  };

  return (
    <Fragment>
      <Form onSubmit={submitHandler}>
        <Header>
          <Text>Form Data Diri</Text>
        </Header>
        {notification && (
          <Notification close={notification}>
            <Success>Success!</Success>
            <Close onClick={closeHandler}>X</Close>
          </Notification>
        )}
        <FormField>
          <GeneralInput onChange={changeHandler} onUpload={avatarChangeHandler} userData={userData} />
          <SelectInput onChange={changeHandler} userData={userData} />
        </FormField>
        <ButtonField>
          <Button>Save</Button>
        </ButtonField>
      </Form>
    </Fragment>
  );
};

export default FormProfile;
