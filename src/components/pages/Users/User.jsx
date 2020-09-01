import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FaUpload } from 'react-icons/fa';
import { AiOutlineReload } from 'react-icons/ai';
import GeneralPage from '../../organism/GeneralPage/GeneralPage';
import Form from '../../organism/Form/Form';
import Button from '../../atoms/Button/Button';
import InputText from '../../atoms/Inputs/InputText';
import { fetchData, useFetchGet, useFetchPost } from '../../../Hooks/hookFetch';
import config from '../../../utils/config';

const User = ({ match }) => {
  const { id } = match.params;
  const history = useHistory();
  const dispatch = useDispatch();
  const { register, handleSubmit, errors, setValue } = useForm();
  const { data: user = {} } = useFetchGet(`${config.urlApi}/api/users`, null, null, id);
  const { name = '' } = user;

  useEffect(() => {
    Object.keys(user).forEach((propt) => {
      console.log(propt);
      if (propt === 'ml') {
        Object.keys(user.ml).forEach((proptMl) => {
          setValue(`ml.${proptMl}`, user.ml[proptMl]);
        });
      } else {
        setValue(propt, user[propt]);
      }
    });
  }, [user]);

  const onSubmit = (data) => {
    const url = `${config.urlApi}/api/users`;
    const body = { ...data, _id: id };
    useFetchPost(url, true, body, dispatch, history);
  };

  return (
    <GeneralPage title={name} goBack={true}>
      <Form onSubmit={onSubmit} handleSubmit={handleSubmit}>
        <h3 className='title'>Información general</h3>

        <div className='row'>
          <InputText
            division={2}
            id='name'
            type='text'
            placeholder='Nombre'
            reference={register({
              required: { value: true, message: 'El nombre es requerido' },
            })}
            errors={errors}
          />

          <InputText
            division={2}
            id='email'
            type='text'
            placeholder='Correo'
            reference={register({
              required: { value: true, message: 'El correo es requerido' },
            })}
            errors={errors}
          />
        </div>

        <h3 className='title'>Intcomex</h3>

        <div className='row'>
          <InputText
            division={3}
            id='customer'
            type='text'
            placeholder='Cliente'
            reference={register({})}
            errors={errors}
          />

          <InputText
            division={3}
            id='apiKey'
            type='text'
            placeholder='Api Key'
            reference={register({})}
            errors={errors}
          />

          <InputText
            division={3}
            id='accessKey'
            type='text'
            placeholder='Access Key'
            reference={register({})}
            errors={errors}
          />
        </div>
      </Form>
    </GeneralPage>
  );
};

export default User;
