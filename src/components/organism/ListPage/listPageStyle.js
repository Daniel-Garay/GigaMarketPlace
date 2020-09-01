import styled from 'styled-components';
import { grayscale } from '../../../styles/atoms/colors';

export const ListPageStyle = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 50px;
  box-sizing: border-box;
  color: ${grayscale.gray};

  & .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
  }

  & p {
    color: gray;
    text-align: center;
    padding: 20px;
  }
`;

export const Content = styled.div`
  background-color: ${(props) => (props.transparent ? 'transparent' : 'white')};
  box-shadow: 9px 9px 8px -10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin-top: 40px;

  ${(props) => props.withPadding && WithPadding}

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

  & .search {
    position: relative;
    & input {
      height: 60px;
      border-radius: 25px;
      color: gray;
      border: 0;
      width: 100%;
      padding: 0 20px;
      padding-left: 60px;
      font-size: 20px;
      box-sizing: border-box;
    }
    & .input-icon {
      position: absolute;
      left: 25px;
      top: 18px;
      color: gray;
      font-size: 25px;
    }
  }
`;
