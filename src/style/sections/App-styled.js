import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

const HeaderWrapper = styled.div`
  //background-color: #fff;
  //background-color: #114B5F;
  color: #fff;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-bottom: 2rem;
`;
const HeadingWrapper = styled.div`
  width: 80%;
  padding-left: ${({ open }) => (open ? '35rem' : '10rem')};
  transition: all .3s ease-in-out;
`;

const HeadingPrimary = styled.h1`
  display: inline-block;
  font-size: 3rem;
  border-bottom: 0.5rem dotted #fff;
`;

const LinkWrapper = styled.div`
  font-size: 2rem;
  width: 20%;

  .current {
    background-color: red;
  }
`;

const LinkText = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  display: inline-block;
  padding: 0 1.5rem;
  transition: all 0.5s;
  border-radius: 2rem;
  //border-bottom: 0.4rem dotted #fff;

  &:hover {
    color: #f187fb;
    background-color: rgba(255, 255, 255, 0.8);
  }
  &:not(:last-child) {
    margin-right: 3rem;
  }
`;

const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 2rem;
  position: relative;
`;

const FooterWrapper = styled.div`
  margin-top: 11rem;
  width: 100%;
  background-color: #114b5f;
  padding: 1rem;
`;

const FooterText = styled.div`
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.2rem;
  text-align: center;
`;

export {
  Wrapper,
  HeaderWrapper,
  HeadingWrapper,
  HeadingPrimary,
  LinkWrapper,
  LinkText,
  MainWrapper,
  FooterWrapper,
  FooterText,
};
