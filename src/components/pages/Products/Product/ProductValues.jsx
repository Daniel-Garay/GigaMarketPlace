import React from 'react';
import InputText from '../../../atoms/Inputs/InputText';

const ProductValues = ({ register, errors }) => {
  return (
    <>
      <h3 className='title'>Valores</h3>

      <div className='row'>
        <InputText
          division={2}
          id='values.earningPercentage'
          type='text'
          placeholder='% Ganancia'
          reference={register({
            required: { value: true, message: 'El porcentaje de ganancia es requerido' },
          })}
          errors={errors}
        />

        <InputText
          division={2}
          id='values.earning'
          type='text'
          placeholder='Ganancia'
          reference={register()}
          errors={errors}
          disabled={true}
        />
      </div>

      <div className='row'>
        <InputText
          division={2}
          id='values.taxPercentage'
          type='text'
          placeholder='% Impuesto'
          reference={register({
            required: { value: true, message: 'El porcentaje de impuesto es requerido' },
          })}
          errors={errors}
        />

        <InputText
          division={2}
          id='values.tax'
          type='text'
          placeholder='Impuesto'
          reference={register()}
          errors={errors}
          disabled={true}
        />
      </div>
      <div className='row'>
        <InputText
          division={2}
          id='values.shipping'
          type='text'
          placeholder='Envío'
          reference={register({
            required: { value: true, message: 'El valor del envío es requerido' },
          })}
          errors={errors}
        />

        <InputText
          division={2}
          id='values.platform'
          type='text'
          placeholder='Plataforma'
          reference={register({
            required: { value: true, message: 'El valor de la plataforma es requerido' },
          })}
          errors={errors}
          disabled={true}
        />
      </div>

      <div className='row'>
        <InputText
          division={2}
          id='values.totalValues'
          type='text'
          placeholder='Total valores'
          reference={register()}
          errors={errors}
          disabled={true}
        />

        <InputText
          division={2}
          id='values.total'
          type='text'
          placeholder='Total producto'
          reference={register()}
          errors={errors}
          disabled={true}
        />
      </div>
    </>
  );
};

export default ProductValues;
