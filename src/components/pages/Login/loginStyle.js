import styled from 'styled-components';
import { actions } from '../../../styles/atoms/colors';

const LoginStyle = styled.div`
  & button {
    width: 93%;
    height: 50px;
  }

  & .content {
    background-color: rgba(255, 255, 255, 0.8);
    padding: 40px;
    border-radius: 10px;
    box-shadow: 9px 9px 8px -10px rgba(0, 0, 0, 0.2);

    & .row {
      margin: 25px 0;
    }

    & .error {
      margin: 0;
      padding: 0;
      margin-top: 10px;
      color: ${actions.error};
    }
  }
`;

export default LoginStyle;
