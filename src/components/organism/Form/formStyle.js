import styled from 'styled-components';
import { displays } from '../../../styles/atoms/variables';
import device from '../../../styles/atoms/devices';

const FormStyle = styled.form`
  & .row {
    display: flex;
    align-items: center;
    margin: 30px 0;

    ${device.mobile`
      display: block;
      

      & div {
        margin: 30px auto;
      }

      & button {
        width: 95%;
      }
    `}
  }
`;

export default FormStyle;
