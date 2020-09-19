import styled from 'styled-components';
import { grayscale, colors } from '../../../styles/atoms/colors';
import {
  displays,
  fontSizes,
  scaleWeight,
  typography,
  setStyledText,
} from '../../../styles/atoms/variables';

const HeaderStyle = styled.header`
  ${displays.flexBetween}
  top:0;
  height: 71px;
  width: 100%;
  position: fixed;
  background: ${grayscale.white};
  border-bottom: 1px solid ${grayscale.graylight};
  z-index: 2;

  & div {
    padding: 0 20px;
    & svg {
      font-size: 30px;
      cursor: pointer;
    }
  }

  & .logo {
    ${setStyledText({
      color: colors.first,
      fontSize: fontSizes.eigthSize,
      fontFamily: typography.fontFamilySecond,
      weight: scaleWeight.black,
    })};
  }
`;

export default HeaderStyle;
