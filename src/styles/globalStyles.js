import { createGlobalStyle } from 'styled-components';
import { colors } from './atoms/colors';
import { fontSizes } from './atoms/variables';

const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Spartan:wght@100;500;600;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;400;600;700&display=swap');

  body {
    margin: 0;
    font-family: 'Spartan', sans-serif;
    font-size: ${fontSizes.mainSize};
    background-color: ${colors.white};
  }

  *:focus {
    outline: none;
  }

  div::-webkit-scrollbar {
    display: none;
  }

  div {
    scrollbar-width: none;
  }

  h1 {
    font-size: 40px;
  }

  h2 {
    font-size: 35px;
    font-weight: bold;
  }

  h3 {
    font-size: 28px;
    font-weight: bold;
  }

  h4 {
    font-size: 24px;
  }

  a {
    color: #48556c;
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }


  & .txt-number {
    width: 42px;
    background-color: #f3f5f9;
    border: 1px solid #e5e7ec;
    padding: 5px !important;
  }

  & .txt-left {
    text-align: left;
  }

  & .txt-center {
    text-align: center;
  }

  & .m15 {
    margin: 15px !important;
  }

  & .d-none {
    display: none;
  }

  & .link-blue {
    color: #52b1f5;
    display: block;
    margin: 10px 0;
  }

  & .without-data {
    font-size: 18px;
    color: gray;
  }

  & .input-file.loaded {
    background-color: #eff9f1;
    & svg {
      color: #00a44d;
    }
  }

  /* full calendar */
    & .fc {
      z-index:0;
    }
`;

export default GlobalStyle;
