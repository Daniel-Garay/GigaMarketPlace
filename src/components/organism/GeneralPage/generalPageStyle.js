import styled from 'styled-components';
import { actions, colors, grayscale } from '../../../styles/atoms/colors';
import { displays } from '../../../styles/atoms/variables';

export const PageStyle = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: ${(props) => (props.contentTop ? '0' : '50px')};
  box-sizing: border-box;
  color: ${grayscale.white};

  :last-child {
    margin-bottom: 70px;
  }

  & .title {
    font-size: 20px;
    display: flex;
    align-items: center;
    color: ${colors.first};

    & svg {
      margin-left: 10px;
      color: ${actions.info};
      cursor: pointer;
    }

    & svg:hover {
      transition: 0.5s;
      filter: brightness(120%);
    }
  }

  & .subtitle {
    font-size: 16px;
    display: flex;
    align-items: center;
    color: ${colors.first};
  }

  & .header {
    ${displays.flexBetween}
    margin: 20px 0;

    & .go-back {
      ${displays.flexCenter}
      margin-right: 10px;
      cursor: pointer;
      & svg {
        font-size: 30px;
      }
    }
  }
`;

export const Content = styled.div`
  background-color: ${(props) => (props.transparent ? 'transparent' : 'white')};
  border-radius: 20px;
  margin-top: 40px;
  padding: 30px;

  & .subtitle {
    font-size: 18px;
    font-family: AvenirNext-UltraLight;
  }

  & .errors {
    margin-top: 10px;
    font-size: 15px;
    & span {
      display: flex;
      width: 100%;
      align-items: center;
      word-break: break-word;
      & svg {
        margin: 0 10px;
        font-size: 16px;
        color: red;
      }
    }
  }

  & .without-data {
    color: gray;
    text-align: center;
    height: 50px;
  }

  & .scrollbarX {
    overflow-x: scroll;
    overflow-y: hidden;
    scrollbar-width: thin;
  }

  & .scrollbarX::-webkit-scrollbar {
    display: inline;
  }

  & .buttons {
    display: flex;
    justify-content: flex-end;
  }
`;
