import { MdError } from 'react-icons/md';
import styled from 'styled-components';

const NotFound = () => {
  return (
    <WarningContainer>
      <WarningIcon>
        <MdError />
      </WarningIcon>
      <WarningText>The page does not exist</WarningText>
    </WarningContainer>
  );
};

export default NotFound;

const WarningContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  height: 33.8rem;
  text-align: center;
`;
const WarningIcon = styled.span`
  font-size: 15rem;
  height: 15rem;
  margin-bottom: 2rem;
`;

const WarningText = styled.span`
  font-size: 3rem;
`;
