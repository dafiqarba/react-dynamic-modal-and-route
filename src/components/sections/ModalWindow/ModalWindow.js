import { Wrapper, Card, CardText, Header, HeaderText, Name } from 'style/sections/ModalWindow-styled';
import { Batch, Content, DataContainer, DataLabel, Data, Backdrop, Close } from 'style/sections/ModalWindow-styled';
import { Empty } from 'style/sections/ModalWindow-styled';
import { Fragment } from 'react';
import { FaTimes } from 'react-icons/fa';

import ModalAvatar from './ModalAvatar';
import ModalSocialMedia from './ModalSocialMedia';

function ModalWindow(props) {
  const dataLength = props.data.length;

  return (
    <Fragment>
      <Backdrop onClick={props.onClose} state={props.modalState} length={dataLength}>
        <Close><FaTimes/></Close>
      </Backdrop>

      <Wrapper state={props.modalState} length={dataLength}>
        {dataLength === 0 ? (
          <Card>
            <Empty>Empty Data</Empty>
          </Card>
        ) : (
          props.data.map((user) => (
            <Card key={user.key} length={dataLength}>
              <ModalAvatar avatar={user.avatar} />
              <CardText>
                <Header>
                  <HeaderText>
                    <Name>{user.name}</Name>
                    <Batch>#Prodemy</Batch>
                  </HeaderText>
                </Header>
                <Content>
                  <DataContainer>
                    <DataLabel>Tanggal Lahir</DataLabel>
                    <Data>{user.birthdate}</Data>
                  </DataContainer>
                  <DataContainer>
                    <DataLabel>Pendidikan</DataLabel>
                    <Data>{user.education}</Data>
                  </DataContainer>
                  <DataContainer>
                    <DataLabel>Jenis Kelamin</DataLabel>
                    <Data>{user.gender}</Data>
                  </DataContainer>
                  <DataContainer>
                    <DataLabel>Agama</DataLabel>
                    <Data>{user.religion}</Data>
                  </DataContainer>
                  <DataContainer>
                    <DataLabel>Email</DataLabel>
                    <Data>{user.email}</Data>
                  </DataContainer>
                  <DataContainer>
                    <DataLabel>No HP</DataLabel>
                    <Data>{user.phone}</Data>
                  </DataContainer>
                </Content>
                <ModalSocialMedia git={user.git} insta={user.insta} />
              </CardText>
            </Card>
          ))
        )}
      </Wrapper>
    </Fragment>
  );
}

export default ModalWindow;
