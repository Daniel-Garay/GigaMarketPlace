import React from 'react';
import { Controller } from 'react-hook-form';
import { FaAngleDown } from 'react-icons/fa';
import InputGroup from './inputsStyle';

const InputSelect = (props) => {
  const { division, id, placeholder, errors, control, rules, disabled, list } = props;

  return (
    <InputGroup division={division}>
      <div className='input-select'>
        <Controller
          as={
            <select id={id}>
              <option>{placeholder}</option>
              {list.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.description}
                </option>
              ))}
            </select>
          }
          control={control}
          rules={rules}
          name={id}
          disabled={disabled}
        />

        <span>
          <FaAngleDown />
        </span>
      </div>
      {errors[id] && (
        <span className='form-error'>{`Por favor seleccione el ${placeholder.toLowerCase()}`}</span>
      )}
    </InputGroup>
  );
};

InputSelect.defaultProps = {
  division: 1,
  id: '',
  placeholder: '',
  errors: [],
  control: {},
  rules: {},
  disabled: false,
  list: [],
};

export default InputSelect;
