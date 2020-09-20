import styled, { css } from 'styled-components';
import {
  displays,
  setStyledText,
  fontSizes,
  typography,
  scaleWeight,
} from '../../../styles/atoms/variables';
import { grayscale, colors } from '../../../styles/atoms/colors';

const styledHover = css`
  background: ${colors.fiveth};
  color: ${grayscale.white};
  transition: all ease-out 200ms;
  & svg {
    color: ${grayscale.white};
  }
`;

const MenuStyle = styled.div`
  width: 100vw;
  height: 100vh;
  /* background-color: rgba(0, 0, 0, 0.2); */
  position: fixed;
  top: 0;

  & .container {
    margin-top: 100px;
    width: 220px;
    height: 100vh;
    ${setStyledText({
      color: grayscale.graymedium,
      fontSize: fontSizes.secondSize,
      fontFamily: typography.fontFamilySecond,
      weight: scaleWeight.regular,
    })};

    & nav {
      ${displays.flexColumn};
      align-items: flex-start;
      gap: 0.5em;
      & > .item-menu {
        cursor: pointer;
        height: 50px;
        ${displays.flexBase};
        align-items: center;
        justify-content: space-between;
        gap: 1em;
        width: 100%;
        padding: 0 0.8em;
        & svg {
          color: ${colors.first};
        }

        & .icon-letf {
          ${displays.flexBase};
          align-items: center;
          gap: 1em;
        }
        & .icon-rigth svg {
          font-size: ${fontSizes.fourthSize};
        }
        &:hover {
          ${styledHover};
          text-decoration: none;
        }
      }

      & .select-option {
        ${styledHover};
      }
    }
  }
`;

export default MenuStyle;
