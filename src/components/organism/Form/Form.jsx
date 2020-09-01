import React from 'react';
import Button from '../../atoms/Button/Button';
import FormStyle from './formStyle';
import { noob } from '../../../utils/utils';

const Form = ({ children, onSubmit, handleSubmit, textButton }) => {
  return (
    <>
      <FormStyle onSubmit={handleSubmit(onSubmit)}>
        {children}
        <div className='buttons'>
          <Button typeStyle='primary' type='submit' text={textButton} />
        </div>
      </FormStyle>
    </>
  );
};

Form.defaultProps = { onSubmit: noob, handleSubmit: noob, textButton: 'Guardar' };

export default Form;
