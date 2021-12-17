import styled from 'styled-components';

export const Close = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  
  border-radius: 50%;
  margin: 3rem 3rem 0 0;

  font-size: 3rem;
  font-weight: 600;

  color: #f1515e;
  background-color: #f9f9f9;
  z-index: 30;

  &:hover {
    cursor: pointer;
  }
`;

export const Backdrop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 100%;
  visibility: ${({ state }) => (state ? 'visible' : 'hidden')};
  opacity: ${({ state }) => (state ? '1' : '0')};
  z-index: 14;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const Wrapper = styled.div.attrs((props) => ({
  state: props.state,
  visible: 'visible',
  hidden: 'hidden',
  length: props.length,
}))`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  overflow-y: auto;

  ${({ length }) => (length === 1 || length === 0) && 'justify-content: center'};
  min-height: 100vh;

  position: fixed;

  top: 0;
  bottom: 0;

  transition: all 0.35s ease-in;
  z-index: 50;

  padding: 1rem 0 1rem 0;
  visibility: ${(props) => (props.state ? props.visible : props.hidden)};
  opacity: ${(props) => (props.state ? 1 : 0)};
  transform: translateZ(0);

  /* width */
  ::-webkit-scrollbar {
    width: 20px;
    background: #f9f9f9;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #5bc6ac;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #5bc6ac;
  }
`;

export const Empty = styled.div`
  padding: 1rem;
  background-color: #fff;
  border-radius: 1rem;
  z-index: 20;
`;

export const Card = styled.div.attrs((props) => ({
  card: props.length,
  marginAmount: '1rem',
}))`
  background-color: #f9f9f9;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);
  margin-right: 2rem;
  width: 65rem;
  border-radius: 1rem;

  display: flex;
  flex-direction: row;
  margin-bottom: ${(props) => (props.card > 0 ? props.marginAmount : 0)};
  z-index: 20;
`;

export const CardText = styled.div`
  height: 100%;
  width: 65%;

  color: #484946;
  padding: 1.5rem;
`;

export const Header = styled.div`
  margin-bottom: 2.5rem;
`;

export const HeaderText = styled.h1`
  margin-top: 1rem;
  text-align: center;
`;

export const Name = styled.span`
  display: block;
  margin-bottom: -1.2rem;

  font-size: 2.2rem;
`;

export const Batch = styled.span`
  font-size: 1.5rem;
  color: #f9f9f9;

  display: inline-block;
  background-color: #484946;
  padding: 0 0.5rem 0 0.5rem;
  border-radius: 0.5rem;
`;

export const Content = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;

  &::after {
    content: '';
    display: table;
    clear: both;
  }
`;

export const DataContainer = styled.div`
  float: left;
  margin-right: 1rem;
  width: 47%;
  margin-bottom: 1rem;

  &:last-child {
    margin-right: 0;
  }
`;

export const DataLabel = styled.p`
  font-size: 1.7rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
`;

export const Data = styled.p`
  border-bottom: 0.2rem solid #5bc6ac;
  width: 100%;
  font-size: 1.45rem;
`;
