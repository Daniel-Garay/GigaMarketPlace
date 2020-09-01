import styled, { css } from 'styled-components';
import { grayscale } from './colors';

const Input = css`
  height: 50px;
  border-radius: 25px;
  color: gray;
  border: 1px solid gray;
  padding: 0 20px;
  font-size: 18px;
  box-sizing: border-box;
  background-color: white;

  :disabled {
    background-color: white;
    color: #c2c2c2;
  }
`;

export const InputTextStyle = css`
  width: 100%;
  ${Input}
`;

export const InputSelect = css`
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
    color: gray;
  }
`;

export const InputTypeFile = css`
  background-color: ${grayscale.white};
  border-radius: 10px;
  overflow: hidden;
  height: 250px;

  & input {
    position: absolute;
    width: 250px;
    height: 250px;
    outline: none;
    opacity: 0;
  }

  & p {
    width: 250px;
    height: 250px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: gray;
    font-family: Arial;
    margin: 0;
  }
`;

export const InputImage = css`
  ${InputTypeFile}

  & svg {
    font-size: 100px;
  }
`;

export const InputFile = css`
  ${InputTypeFile}
  border: 2px dotted gray;

  & p {
    & .error {
      color: $error-color;
    }

    & span {
      font-size: 15px;
    }
    & span:first-of-type {
      margin-top: 15px;
    }
  }

  & svg {
    font-size: 50px;
  }
`;

export const InputSwitch = css`
  display: flex;
  flex-direction: column;
  align-items: center;

  & span {
    font-size: 16px;
  }

  & label {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 24px;

    & input {
      opacity: 0;
      width: 0;
      height: 0;
    }
  }

  & .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  & .slider:before {
    position: absolute;
    content: '';
    height: 20px;
    width: 20px;
    left: 4px;
    bottom: 2px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  & input:checked + .slider,
  .checked + .slider {
    background-color: #2196f3;
  }

  & input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  & input:checked + .slider:before,
  .checked + .slider:before {
    transform: translateX(22px);
  }

  /* Rounded sliders */
  & .slider {
    border-radius: 34px;
  }

  & .slider:before {
    border-radius: 50%;
  }
`;

export const InputCheck = css`
  position: relative;
  width: 15%;

  & input {
    position: absolute;
    left: -9999px;
  }

  & input + label {
    cursor: pointer;
    user-select: none;
  }

  & input + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 21px;
    height: 21px;
    border: 1px solid gray;
    border-radius: 2px;
  }

  & span {
    margin-left: 40px;
    color: gray;
    font-size: 18px;
  }
  & input:checked + label:before {
    background: url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBMRXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAKqADAAQAAAABAAAAKgAAAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/8AAEQgAKgAqAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/bAEMAAQEBAQEBAgEBAgMCAgIDBAMDAwMEBQQEBAQEBQYFBQUFBQUGBgYGBgYGBgcHBwcHBwgICAgICQkJCQkJCQkJCf/bAEMBAQEBAgICBAICBAkGBQYJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCf/dAAQAA//aAAwDAQACEQMRAD8A/v4ooooAKKK8S+Lv7R/wO+A11pVj8XfElroc2ty+TZxzb2aQ5ALERqxSMEgNI+1Fzywruy7LMTjKyw+EpynN7Rim27auyV3otThzLNMNg6LxGMqRhBbyk1FK+iu3ZavQ9tooorhO4//Q/v4r83fi5/wUj8A/Av8Aatj/AGcvifodzpelSQ27/wDCRSygQB7lAyt5OzJt1J8t5hJ8rqwKYUmv0ir5A/bI/Y6+H37X/wAOW8NeIQtjrlirvpOqquZLaUjlW6F4XIAkTPPDDDAGvvfDetkMcyVPiSnKVCaceaLadNu1qiS+Ll/ld1Z3s7JP4HxJoZ/LLHV4aqRjiINS5ZJNVEr3ptv4ebpJWaatdJtqp+2D+2l8NP2S/hqvivVZY9U1nVIz/Y+mxSDddNjiQsM7YFyC8mPZcsQK/KT9jz9kH4m/tsfEz/hsv9sV5LjSbiRZtM06UFFvFQ5iAjP+rsY/4E6zck5Ukve/ZL/4JP8AxLvfiRH4v/bMdbvSfDQS10zTPtYvEvEgJ8rcwZvLs06rCdrMThkVch/6EoIILWBLW1RY4o1CoigBVUDAAA4AA6Cv2bPuKcn4KwVTJ+E66r4qqrVMStowe1Olq7Nq3NJPfre3J+LZBwrnHG+Np5xxbQdDC0nelhnvKa3qVdFdJ35YtbdLN88tFFFfy4f1Of/R/v4ooooAKKKKACiiigD/2Q==');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  & input.checked + label:before {
    background: url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBMRXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAKqADAAQAAAABAAAAKgAAAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/8AAEQgAKgAqAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/bAEMAAQEBAQEBAgEBAgMCAgIDBAMDAwMEBQQEBAQEBQYFBQUFBQUGBgYGBgYGBgcHBwcHBwgICAgICQkJCQkJCQkJCf/bAEMBAQEBAgICBAICBAkGBQYJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCf/dAAQAA//aAAwDAQACEQMRAD8A/v4ooooAKKK8S+Lv7R/wO+A11pVj8XfElroc2ty+TZxzb2aQ5ALERqxSMEgNI+1Fzywruy7LMTjKyw+EpynN7Rim27auyV3otThzLNMNg6LxGMqRhBbyk1FK+iu3ZavQ9tooorhO4//Q/v4r83fi5/wUj8A/Av8Aatj/AGcvifodzpelSQ27/wDCRSygQB7lAyt5OzJt1J8t5hJ8rqwKYUmv0ir5A/bI/Y6+H37X/wAOW8NeIQtjrlirvpOqquZLaUjlW6F4XIAkTPPDDDAGvvfDetkMcyVPiSnKVCaceaLadNu1qiS+Ll/ld1Z3s7JP4HxJoZ/LLHV4aqRjiINS5ZJNVEr3ptv4ebpJWaatdJtqp+2D+2l8NP2S/hqvivVZY9U1nVIz/Y+mxSDddNjiQsM7YFyC8mPZcsQK/KT9jz9kH4m/tsfEz/hsv9sV5LjSbiRZtM06UFFvFQ5iAjP+rsY/4E6zck5Ukve/ZL/4JP8AxLvfiRH4v/bMdbvSfDQS10zTPtYvEvEgJ8rcwZvLs06rCdrMThkVch/6EoIILWBLW1RY4o1CoigBVUDAAA4AA6Cv2bPuKcn4KwVTJ+E66r4qqrVMStowe1Olq7Nq3NJPfre3J+LZBwrnHG+Np5xxbQdDC0nelhnvKa3qVdFdJ35YtbdLN88tFFFfy4f1Of/R/v4ooooAKKKKACiiigD/2Q==');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`;

export const InputMessage = css`
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
    box-shadow: 9px 9px 8px -10px rgba(0, 0, 0, 0.2);
  }

  & svg {
    position: absolute;
    top: 18px;
    font-size: 30px;
    cursor: pointer;
  }

  & .input-send {
    right: 25px;
    color: lightblue;
  }

  & .input-attach {
    right: 80px;
    color: gray;
    transform: rotate(60deg);
  }
`;

//For Autocomplete
export const InputText = styled.div`
  ${InputTextStyle}
`;
