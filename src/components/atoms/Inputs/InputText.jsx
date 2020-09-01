import React from 'react';
import InputGroup from './inputsStyle';

const InputText = (props) => {
  const {
    division,
    id,
    type,
    placeholder,
    autocomplete,
    reference,
    errors,
    disabled,
    handleBlur,
  } = props;

  const handleBlurInput = (event) => {
    if (handleBlur) {
      handleBlur(event);
    }
  };

  const arrayIds = id.split('.');
  let error = arrayIds.length > 1 ? errors[arrayIds[0]] : errors[id];
  error = arrayIds.length > 1 && error ? error[arrayIds[1]] : errors[id];

  return (
    <InputGroup division={division}>
      <input
        className='input-text'
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        autoComplete={autocomplete}
        onInput={handleBlurInput}
        ref={reference}
        disabled={disabled}
      />
      <label htmlFor={id}>{placeholder}</label>
      {error && <span className='form-error'>{error.message}</span>}
    </InputGroup>
  );
};

export default InputText;
