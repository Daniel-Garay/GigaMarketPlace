import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import InputText from '../../atoms/Inputs/InputText';
import Button from '../../atoms/Button/Button';
import { signInRequest } from './loginActions';
import LoginStyle from './loginStyle';

const SignIn = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    dispatch(signInRequest(data));
  };

  return (
    <LoginStyle>
      <div className='content'>
        <h3 className='title'>Registrarse</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='row'>
            <InputText
              id='name'
              type='text'
              placeholder='Nombre'
              reference={register({
                required: { value: true, message: 'El nombre es requerido' },
              })}
              errors={errors}
            />
          </div>

          <div className='row'>
            <InputText
              id='email'
              type='email'
              placeholder='Correo'
              reference={register({
                required: { value: true, message: 'El correo es requerido' },
              })}
              errors={errors}
            />
          </div>
          <div className='row'>
            <InputText
              id='password'
              type='password'
              placeholder='Contraseña'
              reference={register({
                required: { value: true, message: 'La contraseña es requerida' },
              })}
              errors={errors}
            />
          </div>
          <div className='row'>
            <InputText
              id='password-repeat'
              type='password'
              placeholder='Repetir contraseña'
              reference={register({
                required: { value: true, message: 'La contraseña es requerida' },
              })}
              errors={errors}
            />
          </div>
          <div className='buttons'>
            <Button typeStyle='primary' type='submit' text='Registrarme' />
          </div>
          <br />
          <Link to='/'>Ingresar</Link>
        </form>
      </div>
    </LoginStyle>
  );
};

export default SignIn;
