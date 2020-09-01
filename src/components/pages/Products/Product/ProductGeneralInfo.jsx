import React from 'react';
import InputText from '../../../atoms/Inputs/InputText';

const ProductGeneralInfo = ({ register, errors, product }) => {
  return (
    <>
      <h3 className='title'>Información general</h3>

      <div className='row'>
        <InputText
          id='description'
          type='text'
          placeholder='Descripción'
          reference={register({
            required: { value: true, message: 'La descripción es requerida' },
          })}
          errors={errors}
        />
      </div>

      <div className='row'>
        <InputText
          division={2}
          id='sku'
          type='text'
          placeholder='SKU'
          reference={register({
            required: { value: true, message: 'El SKU es requerido' },
          })}
          errors={errors}
        />

        <InputText
          division={2}
          id='mpn'
          type='text'
          placeholder='MPN'
          reference={register({
            required: { value: true, message: 'El MPN es requerido' },
          })}
          errors={errors}
        />
      </div>

      <div className='row'>
        <InputText
          division={2}
          id='compilationDate'
          type='text'
          placeholder='Fecha compilación'
          reference={register()}
          errors={errors}
        />

        <InputText
          division={2}
          id='model'
          type='text'
          placeholder='Modelo'
          reference={register()}
          errors={errors}
        />
      </div>

      <div className='row'>
        <InputText
          division={2}
          id='onSale'
          type='text'
          placeholder='On Sale'
          reference={register()}
          errors={errors}
        />
        <InputText
          division={2}
          id='type'
          type='text'
          placeholder='Tipo'
          reference={register()}
          errors={errors}
        />
      </div>

      <div className='row'>
        <InputText
          division={2}
          id='price'
          type='text'
          placeholder='Precio'
          reference={register()}
          disabled={true}
          errors={errors}
        />

        <InputText
          division={2}
          id='inventory'
          type='text'
          placeholder='Inventario'
          reference={register()}
          disabled={true}
          errors={errors}
        />
      </div>

      <h3 className='title'>Propiedades</h3>

      <ul>{product.properties && product.properties.map((property) => <li>{property}</li>)}</ul>

      <h3 className='title'>Imágenes</h3>

      <div className='images'>
        {product.images &&
          product.images
            .filter((i) => i.width === '200')
            .sort((a, b) => a.isMainImage - b.isMainImage)
            .map((image) => (
              <div>
                <img src={image.url} alt='Product' />
              </div>
            ))}
      </div>
    </>
  );
};

export default ProductGeneralInfo;
