import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import InputText from '../../atoms/Inputs/InputText';
import Button from '../../atoms/Button/Button';
import { loginRequest } from './loginActions';
import LoginStyle from './loginStyle';

const Login = ({ location: { state } }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(({ user }) => user);
  const error = state ? state.error : '';
  const { register, handleSubmit, errors } = useForm();

  useEffect(() => {
    if (Object.keys(user).length > 0) {
      history.push('/dashboard');
    }
  }, [user]);

  const onSubmit = (data) => {
    const { name, email, password } = data;
    const body = { name, email, password };
    console.log(body);
    dispatch(loginRequest(body));
  };

  return (
    <LoginStyle>
      <div className='content'>
        <h3 className='title'>Bienvenido</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
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
          <div className='buttons'>
            <Button typeStyle='primary' type='submit' text='Ingresar' />
          </div>
          <br />
          <Link to='/sign-in'>Registrarse</Link>
        </form>
        {error && <p className='error'>{error}</p>}
      </div>
    </LoginStyle>
  );
};

export default Login;
