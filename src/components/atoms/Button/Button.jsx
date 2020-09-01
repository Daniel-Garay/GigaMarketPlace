import React from 'react';
import ButtonStyle from './buttonStyle';
import { noob } from '../../../utils/utils';

const Button = (props) => {
  const { text, typeStyle, children, handleClick, type, disabled } = props;
  const typeButton = !type ? 'button' : type;

  return (
    <>
      {typeButton === 'submit' ? (
        <ButtonStyle typeStyle={typeStyle} type={typeButton} disabled={disabled}>
          {children}
          {text}
        </ButtonStyle>
      ) : (
        <ButtonStyle
          typeStyle={typeStyle}
          type={typeButton}
          onClick={() => handleClick()}
          disabled={disabled}
        >
          {children}
          {text}
        </ButtonStyle>
      )}
    </>
  );
};

Button.defaultProps = {
  text: '',
  typeStyle: '',
  handleClick: noob,
  type: '',
  disabled: false,
};

export default Button;
