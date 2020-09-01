import styled, { css } from 'styled-components';
import { actions, grayscale } from '../../../styles/atoms/colors';
import device from '../../../styles/atoms/devices';

const FormError = css`
  position: absolute;
  top: 50px;
  left: 20px;
  font-size: 12px;
  color: ${actions.error};
`;

const Input = css`
  height: 50px;
  border-radius: 10px;
  color: ${grayscale.graydark};
  border: 1px solid ${grayscale.graydark};
  padding: 0 20px;
  font-size: 18px;
  box-sizing: border-box;
  background-color: white;

  :disabled {
    background-color: white;
    color: #c2c2c2;
  }
`;

const InputText = css`
  width: 100%;
  ${Input}
`;

const InputSelect = css`
  position: relative;
  margin-right: -7px;

  & select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 98%;
    ${Input}
  }

  & select::-moz-focusring {
    outline: none;
  }

  & select::-ms-expand {
    display: none;
  }

  & span {
    position: absolute;
    right: 25px;
    top: calc(50% - 9px);
    display: block;
    font-size: 20px;
    color: ${grayscale.graydark};
  }
`;

const InputGroup = styled.div`
  position: relative;
  color: ${grayscale.graydark};
  padding: 0 5px;
  box-sizing: border-box;
  width: ${(props) => (props.division ? `${100 / props.division}%` : '100%')};

  ${device.mobile`
    width: 100%;
  `}

  & input:not(:placeholder-shown) + label {
    transform: translate(0, -1.6em) scale(0.9);
    background-color: white;
  }
  & input::placeholder {
    color: transparent;
  }
  & label {
    position: absolute;
    top: 0.75em;
    left: 0;
    font-size: 18px;
    padding: 0 5px;
    margin: 0 15px;
    transition: transform 0.25s, opacity 0.25s, padding 0.25s ease-in-out;
    cursor: text;
  }
  & input:focus {
    background-position: left bottom;
    background-size: 100% 1px;
  }
  & input:focus + label {
    transform: translate(0, -1.6em) scale(0.9);
    background-color: white;
  }

  & .form-error {
    ${FormError}
  }

  & .input-text {
    ${InputText}
  }

  & .input-select {
    ${InputSelect}
  }
`;

export default InputGroup;
