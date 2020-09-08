import styled from 'styled-components';
import { displays } from '../../../styles/atoms/variables';
import { colors, grayscale } from '../../../styles/atoms/colors';

export const ContentTab = styled.section`
  ${displays.flexBase};
  align-items: center;
  gap: 1em;

  & .tab {
    font-size: 20px;
    background: transparent;
    padding: 10px 20px;
    cursor: pointer;
    color: ${grayscale.graylight};
    transition: all ease-in-out 0.2s;
    border-bottom: 2px solid transparent;

    &.active {
      border-bottom: 2px solid ${colors.fourth};
      color: ${grayscale.black};
    }
  }
`;
