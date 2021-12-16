import styled, { css } from 'styled-components';

export const ContentWrapper = styled.div`
  width: 70rem;
  background-color: #f2f2f2;

  padding: 2.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 1.5rem 1.5rem rgba(0, 0, 0, 0.2);
`;

export const Button = styled.div`
  height: 2rem;
  text-align: right;
`;

const ButtonStyle = css`
  font-weight: 600;
  text-decoration: none;
  color: #693f62;
  border: none;
  border-bottom: 0.2rem dotted #693f62;
  font-size: 1.7rem;
  cursor: pointer;
  
`;



export const ResetModal = styled.button`
  ${ButtonStyle}
  
`;

export const ViewModal = styled.button`
  ${ButtonStyle};
  margin-right: 2rem;
`;

