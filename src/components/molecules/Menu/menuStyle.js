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
    overflow: hidden;
    height: 100vh;
    transition: width 0.2s ease-in-out;
    ${setStyledText({
      color: grayscale.graymedium,
      fontSize: fontSizes.secondSize,
      fontFamily: typography.fontFamilySecond,
      weight: scaleWeight.regular,
    })};

    & nav {
      ${displays.flexColumn};
      align-items: flex-start;
      & > .item-menu {
        cursor: pointer;
        height: 50px;
        ${displays.flexBase};
        align-items: center;
        justify-content: space-between;
        gap: 1em;
        width: 100%;
        & svg {
          color: ${colors.first};
        }

        & .icon-letf {
          ${displays.flexBase};
          align-items: center;
          gap: 1em;
          margin-left: 1em;
        }
        & .icon-rigth {
          margin-right: 0.5em;
          & svg {
            font-size: ${fontSizes.fourthSize};
          }
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

    & .toggle-expand {
      position: absolute;
      bottom: 0;
      height: 40px;
      width: 200px;
      border-top: 1px solid ${grayscale.graylight};
      display: flex;
      justify-content: flex-end;
      & svg {
        margin: 0.5em 0;
        color: ${grayscale.gray};
        cursor: pointer;
      }
    }

    &.collapse {
      width: 55px;
      & .toggle-expand {
        justify-content: center;
        width: 55px;
        & svg {
          color: ${colors.first};
        }
      }
    }
  }
`;

export default MenuStyle;
