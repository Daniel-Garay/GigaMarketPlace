import styled from 'styled-components';
import { displays } from '../../../../styles/atoms/variables';
// import device from '../../../../styles/atoms/devices';

const ProductStyle = styled.div`
  & .images {
    ${displays.flexWrap}

    & div {
      border: 1px solid gray;
      border-radius: 10px;
      width: 24%;
      margin: 2px;
      ${displays.flexCenter}

      & img {
        width: 200px;
      }
    }
  }
`;

export default ProductStyle;
