import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import GeneralPage from '../../../organism/GeneralPage/GeneralPage';
import Form from '../../../organism/Form/Form';
import ProductGeneralInfo from './ProductGeneralInfo';
import MLProduct from './MLProduct';
import ProductValues from './ProductValues';
import { fetchData, useFetchGet, useFetchPost } from '../../../../Hooks/hookFetch';
import { textToInt } from '../../../../utils/helpers';
import config from '../../../../utils/config';
import ProductStyle from './productStyle';

const Product = ({ match }) => {
  const { id } = match.params;
  const history = useHistory();
  const dispatch = useDispatch();
  const { register, handleSubmit, errors, setValue, control, watch } = useForm();
  const { data: product = {} } = useFetchGet(`${config.urlApi}/api/products`, null, null, id);
  const { description = '' } = product;

  useEffect(() => {
    Object.keys(product).forEach((propt) => {
      setValue(propt, product[propt]);
    });
  }, [product]);

  const publicationType = watch('ml.type');
  const categoryId = watch('ml.categoryId');
  const earningPercentage = watch('values.earningPercentage');
  const taxPercentage = watch('values.taxPercentage');
  const platform = watch('values.platform');
  const shipping = watch('values.shipping');
  const total = watch('values.total');

  useEffect(() => {
    const price = textToInt(product.price);
    const valuePlatform = textToInt(platform) || 0;
    const valueShipping = textToInt(shipping) || 0;
    const percentage = textToInt(taxPercentage);
    const earningPer = textToInt(earningPercentage);

    const tax = price * (percentage / 100);
    const earning = price * (earningPer / 100);
    const values = valuePlatform + valueShipping + tax + earning;
    const value = price + values;

    setValue('values.totalValues', Math.ceil(values));
    setValue('values.total', Math.ceil(value));
    setValue('values.tax', Math.ceil(tax));
    setValue('values.earning', Math.ceil(earning));
  }, [platform, shipping, earningPercentage, taxPercentage]);

  useEffect(() => {
    const url = `${config.urlApi}/api/ml/getPublishPrice?category=${categoryId}&price=${total}&type=${publicationType}`;
    fetchData(url, 'GET').then((response) => {
      const { data } = response;
      if (data) {
        setValue('values.platform', data.sale_fee_amount);
      }
    });
  }, [publicationType]);

  const onSubmit = (data) => {
    const url = `${config.urlApi}/api/products`;
    const body = { ...data, _id: id };
    useFetchPost(url, true, body, dispatch, history);
  };

  return (
    <GeneralPage title={description.split('-').shift()} goBack={true}>
      <ProductStyle>
        <Form onSubmit={onSubmit} handleSubmit={handleSubmit}>
          <ProductGeneralInfo register={register} errors={errors} product={product} />
          <ProductValues register={register} errors={errors} />
          <MLProduct
            register={register}
            errors={errors}
            control={control}
            product={product}
            setValue={setValue}
          />
        </Form>
      </ProductStyle>
    </GeneralPage>
  );
};

export default Product;
