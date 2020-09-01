import styled, { css } from 'styled-components';
import { grayscale, actions } from '../../../styles/atoms/colors';

export const LogStyle = styled.div`
  padding: 20px;
  height: 600px;
  overflow-y: scroll;

  scrollbar-width: thin;
  ::-webkit-scrollbar {
    display: inline;
  }

  & .item {
    cursor: pointer;
    height: 30px;
    padding: 0;
    text-align: left;

    color: ${grayscale.graydark};
  }

  & .body {
    padding: 0 10px;
    text-align: left;
  }

  & summary {
    list-style-type: none;
  }

  & summary::-webkit-details-marker {
    display: none;
  }

  & details[open] > summary {
    filter: brightness(98%);
  }
`;

const LevelInfo = css`
  background-color: ${actions.info};
  color: white;
`;

const LevelError = css`
  background-color: ${actions.error};
  color: white;
`;

export const Level = styled.span`
  margin: 0 5px;
  border-radius: 5px;
  ${(props) => props.level === 'info' && LevelInfo}
  ${(props) => props.level === 'error' && LevelError}
`;
