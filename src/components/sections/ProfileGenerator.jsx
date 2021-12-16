import { useState, useEffect } from 'react';
import { ContentWrapper, Button, ResetModal, ViewModal } from 'style/sections/ProfileGenerator-styled';
import FormProfile from './FormProfile/FormProfile';
import ModalWindow from './ModalWindow/ModalWindow';

const ProfileGenerator = () => {
  const [userData, setUserData] = useState([]);
  const [modalState, setModalState] = useState(false);
  const [key, setKey] = useState(0);

  // Gather data from Form component and set modalState to true
  const submitDataHandler = (userDataForm) => {
    setUserData((prevState) => {
      return [
        ...prevState,
        {
          ...userDataForm,
          key: String(key),
        },
      ];
    });
    setKey(key + 1);
  };

  const closeHandler = () => {
    setModalState(false);
  };
  const resetHandler = () => {
    setUserData('');
    setModalState(false);
  };
  const openModal = () => {
    setModalState(true);
  };

  useEffect(() => {
    if (modalState) {
      document.body.style.overflowY = 'hidden';
    } else {
       document.body.style.overflowY = 'auto';
    }
  }, [modalState]);

  return (
    <ContentWrapper>
      <FormProfile onSubmitData={submitDataHandler} />
      <Button>
        <ViewModal onClick={openModal}>View Modal</ViewModal>
        <ResetModal onClick={resetHandler}>Reset Modal</ResetModal>
      </Button>
      <ModalWindow data={userData} modalState={modalState} onClose={closeHandler} />
    </ContentWrapper>
  );
};

export default ProfileGenerator;
