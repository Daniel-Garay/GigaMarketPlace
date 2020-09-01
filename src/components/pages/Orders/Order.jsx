import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import GeneralPage from '../../organism/GeneralPage/GeneralPage';
import Form from '../../organism/Form/Form';
import { useFetchGet, useFetchPost } from '../../../Hooks/hookFetch';
import { mongoDateToString } from '../../../utils/helpers';
import config from '../../../utils/config';

const Product = ({ match }) => {
  const { id } = match.params;
  const history = useHistory();
  const dispatch = useDispatch();
  const { register, handleSubmit, errors, setValue, watch } = useForm();
  const { data: order = {} } = useFetchGet(`${config.urlApi}/api/ml/order`, null, null, id);
  const { id: number = '', order_items = [] } = order;

  useEffect(() => {
    Object.keys(order).forEach((propt) => {
      setValue(propt, order[propt]);
    });
  }, [order]);

  const onSubmit = (data) => {
    const url = `${config.urlApi}/api/orders`;
    const body = { ...data, _id: id };
    useFetchPost(url, true, body, dispatch, history);
  };

  return (
    <GeneralPage title={number} goBack={true}>
      <h3 className='title'>{`Orden ${number}`}</h3>
      <p>{`Fecha de creación: ${mongoDateToString(order.date_created)}`}</p>
      <p>{`Fecha de expiración: ${mongoDateToString(order.expiration_date)}`}</p>
      <p>{`Total: ${order.total_amount}`}</p>
      <p>{`Pagado: ${order.paid_amount}`}</p>
      <p>{`Item: ${order_items[0] ? order_items[0].item.id : ''}`}</p>
      <textarea style={{ width: '100%' }} rows='20' value={JSON.stringify(order, undefined, 4)} />
    </GeneralPage>
  );
};

export default Product;
