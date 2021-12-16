import styled from 'styled-components';
import image from 'img/undraw_landing.svg';

const Home = () => {
  return (
    <Wrapper>
      <TextWrapper>
        <TextMain>Hi there,</TextMain>
        <TextSub>Welcome to my Card Generator!</TextSub>
      </TextWrapper>
      <ImageWrapper>
        <Image src={image}></Image>
      </ImageWrapper>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  width: 100rem;
  display: flex;
  flex-direction: row;
  margin-top: 5rem;
  padding: 1rem;
  align-items: center;
  margin-top: 10rem;
`;

const TextWrapper = styled.div`
  color: #fff;
  font-size: 6rem;
  width: 50%;
  //background-color: #fff;

  padding: 2rem;
`;

const TextMain = styled.h2`
  font-size: 6rem;
`;

const TextSub = styled.p`
  font-size: 3rem;
`;

const ImageWrapper = styled.div`
  width: 50%;
  //background-color: #fff;
`;
const Image = styled.img`
  width: 100%;
`;
