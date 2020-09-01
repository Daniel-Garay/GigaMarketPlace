import styled, { css } from 'styled-components';
import { grayscale, actions } from '../../../styles/atoms/colors';

const TablePrimary = css`
  & thead {
    border: 1px solid ${grayscale.graylight};
    font-weight: bolder;
  }

  & tbody {
    border: 1px solid ${grayscale.graylight};
  }

  & th {
    padding: 25px;
    font-size: 16px;
    color: ${grayscale.gray};
  }
`;

const TableStyle = styled.table`
  margin-left: -1px;
  width: 100.1%;
  text-align: center;
  color: gray;
  border-collapse: collapse;

  ${(props) => props.primary && TablePrimary}

  & th {
    font-size: ${(props) => (props.multipleFields ? '14px' : '16px')};
  }

  & td {
    padding: 10px ${(props) => (props.multipleFields ? '15px' : '25px')};
    border-bottom: 1px solid ${grayscale.graylight};
    font-size: ${(props) => (props.multipleFields ? '14px' : '16px')};
    & svg {
      margin-left: 10px;
      color: ${actions.error};
    }
    & .report {
      color: black;
      font-size: 18px;
    }
  }

  & tbody tr {
    cursor: pointer;
    & .delete-button {
      margin: 5px 20px;
      & svg {
        font-size: 20px;
      }
    }
  }

  & tr:hover {
    background-color: ${grayscale.white};
    & button {
      background-color: ${grayscale.white};
    }
  }
`;

export default TableStyle;
