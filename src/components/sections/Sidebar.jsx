import { Fragment } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


const Sidebar = ({open,setOpen}) => {

  return (
    <Fragment>
      <BurgerMenu onClick={() => setOpen(!open)} open={open}>
        <div></div>
        <div></div>
        <div></div>
      </BurgerMenu>
      <StyledMenu open={open}>
        <LinkText to="/home">Home</LinkText>
        <LinkText to="/generate">Generate</LinkText>
      </StyledMenu>
    </Fragment>
  );
};

export default Sidebar;

const BurgerMenu = styled.button`
  position: absolute;
  ${({open}) => open && 'position: fixed' };
  top: 2%;
  left: ${({open})=> open ? '24rem' : '3rem'};
  transition: .3s all ease-in-out;
  width: 4rem;
  height: 4rem;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 4rem;
    height: .65rem;
    background: ${({open}) => open ? '#114b5f' : '#effffa'};
    border-radius: 1rem;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: .1rem;

    &:first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(2rem)' : 'translateX(0)')};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

const LinkText = styled(NavLink)`
  text-decoration: none;
  display: inline-block;
  padding: 0 1.5rem;
  transition: all 0.5s;
  //border-bottom: 0.4rem dotted #fff;
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.5rem;
  color: #114b5f;
  padding: 1rem 0 1rem 3rem;

  /*  &:not(:last-child) {
      margin-bottom: 3rem;
  } */
  &:hover {
    color: #f187fb;
    background-color: rgba(255, 255, 255, 0.6);
  }
`;

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  transition: transform 0.3s ease-in-out;
  width: 30rem;

  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.49);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(.9rem);
  -webkit-backdrop-filter: blur(.9rem);
  border: 1px solid rgba(255, 255, 255, 0.51);

  z-index: 9;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
`;
