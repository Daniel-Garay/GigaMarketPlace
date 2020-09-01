import styled from 'styled-components';
import { displays } from '../styles/atoms/variables';
import ShoppingImg from '../assets/static/shopping_img.svg';

const LayoutStyle = styled.div`
  ${displays.flexColumn}
  position: relative;
  height: 99vh;
  text-align: center;
  background-image: url(${ShoppingImg});
  background-repeat: no-repeat;
  background-position: center;

  & .version {
    position: absolute;
    left: 10px;
    bottom: 10px;
  }
`;

export default LayoutStyle;
