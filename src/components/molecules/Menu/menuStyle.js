import styled from 'styled-components';

const MenuStyle = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;

  & .container {
    padding-top: 60px;
    width: 400px;
    height: 100vh;
    background-color: white;
    box-shadow: 9px 9px 8px -10px rgba(0, 0, 0, 0.2);

    & nav {
      & div {
        cursor: pointer;
        border-bottom: 1px solid gray;
        height: 40px;
        padding: 0 25px;
        display: flex;
        align-items: center;
      }
    }
  }
`;

export default MenuStyle;
