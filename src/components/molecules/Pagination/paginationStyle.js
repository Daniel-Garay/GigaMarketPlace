import styled, { css } from 'styled-components';
import { displays } from '../../../styles/atoms/variables';
import { grayscale } from '../../../styles/atoms/colors';
import device from '../../../styles/atoms/devices';

const PageActive = css`
  background-color: ${grayscale.graylight};
`;

export const PaginationContainer = styled.div`
  ${displays.flexBetween}

  ${device.mobile`
    display: block;
  `}

  padding: 30px;

  & .pages {
    display: flex;
    height: 30px;
    border: 1px solid black;
    border-radius: 5px;

    & ul {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    & svg {
      cursor: pointer;
      width: 30px;
      height: 30px;
      ${displays.flexCenter};
      :last-child {
        border-left: 1px solid gray;
      }
    }
  }
`;

export const Page = styled.li`
  ${displays.flexCenter}
  cursor: pointer;
  width: 30px;
  height: 30px;
  border-left: 1px solid gray;

  ${(props) => props.active && PageActive}

  :hover {
    ${PageActive}
  }
`;
