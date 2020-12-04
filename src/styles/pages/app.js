import styled from 'styled-components';
// import device from '../atoms/devices';
import { grayscale } from '../atoms/colors';

const ContentApp = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: ${({ expand }) => (expand ? '250px' : '100px')} 1fr 1fr;
  background: ${grayscale.white};
  grid-template-areas:
    'header  header  header'
    'menu content content'
    'footer  footer  footer';
  transition: all 0.1s ease-in-out;
  & .header {
    grid-area: header;
  }
  & .menu {
    grid-area: menu;
  }
  & .content {
    grid-area: content;
  }
  & .footer {
    grid-area: footer;
  }
`;

export default ContentApp;
