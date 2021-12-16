import { Wrapper, ContentWrapper, Avatar } from 'style/sections/ModalAvatar-styled';

function ModalAvatar(props) {
  return (
    <Wrapper>
      <ContentWrapper>
        <Avatar src={props.avatar}></Avatar>
      </ContentWrapper>
    </Wrapper>
  );
}

export default ModalAvatar;
