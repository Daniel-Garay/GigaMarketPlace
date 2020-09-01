import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../../atoms/Button/Button';
import InputText from '../../../atoms/Inputs/InputText';
import InputSelect from '../../../atoms/Inputs/InputSelect';
import { addNotification } from '../../../../actions';
import { fetchData } from '../../../../Hooks/hookFetch';
import { publicationTypes } from '../../../../utils/constants';
import config from '../../../../utils/config';

const MLProduct = ({ register, errors, control, product, setValue }) => {
  const dispatch = useDispatch();
  const handleClickCategory = () => {
    const url = `${config.urlApi}/api/ml/getCategories/${product.description.split('-').shift()}`;
    fetchData(url, 'GET', null).then((response) => {
      const { data } = response;
      if (data.length > 0) {
        const { category_id: id, category_name: name } = data[0];
        setValue('ml.categoryId', id);
        setValue('ml.categoryName', name);
      } else {
        dispatch(
          addNotification({ type: 'error', message: 'No fue posible predecir la categoría' }),
        );
      }
    });
  };

  const handleClickUpload = () => {
    const url = `${config.urlApi}/api/ml/publish`;
    fetchData(url, 'POST', null, product).then((response) => {
      const { data } = response;
      console.log(data);

      if (data) {
        dispatch(
          addNotification({ type: 'success', message: 'El producto fue cargado correctamente' }),
        );
      } else {
        dispatch(addNotification({ type: 'error', message: 'No fue posible cargar el producto' }));
      }
    });
  };

  const productPublicated = product.ml && product.ml.id;

  return (
    <>
      <h3 className='title'>Mercado Libre</h3>

      <div className='row'>
        <InputText
          division={2}
          id='ml.categoryId'
          type='text'
          placeholder='ID de Categoría'
          reference={register({
            required: { value: true, message: 'El id de categoría es requerido' },
          })}
          errors={errors}
          disabled={productPublicated}
        />

        <InputText
          division={2}
          id='ml.categoryName'
          type='text'
          placeholder='Nombre de Categoría'
          reference={register({
            required: { value: true, message: 'El nombre de categoría es requerido' },
          })}
          errors={errors}
          disabled={productPublicated}
        />

        <InputSelect
          division={2}
          id='ml.type'
          placeholder='Tipo publicación'
          errors={errors}
          control={control}
          rules={{ required: true }}
          list={publicationTypes}
        />

        <Button
          typeStyle='secondary'
          text='Predecir'
          handleClick={handleClickCategory}
          disabled={productPublicated}
        />

        <Button
          typeStyle='secondary'
          text='Publicar'
          handleClick={handleClickUpload}
          disabled={productPublicated}
        />
      </div>

      {productPublicated && <p>{`Producto publicado en Mercado Libre con ID ${product.ml.id}`}</p>}
    </>
  );
};

export default MLProduct;
