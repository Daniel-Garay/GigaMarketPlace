import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';
// import { useForm } from 'react-hook-form';
import GeneralPage from '../../organism/GeneralPage/GeneralPage';
// import Form from '../../organism/Form/Form';
// import InputText from '../../atoms/Inputs/InputText';
// import InputSelect from '../../atoms/Inputs/InputSelect';
// import { useFetchGet, useFetchPost } from '../../../Hooks/hookFetch';
// import { states } from '../../../utils/constants';
// import { mongoId } from '../../../utils/regex';
// import config from '../../../utils/config';
import Tabs from '../../molecules/Tabs';
import Tab from '../../molecules/Tabs/Tab';

const Publication = ({ match }) => {
  const { id } = match.params;
  // const history = useHistory();
  // const dispatch = useDispatch();
  // const { register, handleSubmit, errors, setValue, control } = useForm();
  // const { data: user = {} } = useFetchGet(`${config.urlApi}/api/marketplaces`, null, null, id);
  // const { name = '' } = user;
  // const update = mongoId.test(id);

  // useEffect(() => {
  //   Object.keys(user).forEach((propt) => {
  //     setValue(propt, user[propt]);
  //   });
  // }, [user]);

  // const onSubmit = (data) => {
  //   const url = `${config.urlApi}/api/marketplaces`;
  //   const body = { ...data, _id: id };
  //   useFetchPost(url, update, body, dispatch, history);
  // };

  return (
    <GeneralPage title={'Producto'} goBack={true}>
      <Tabs>
        <Tab label='Informacíon'>
          <p>tab 1</p>
        </Tab>
        <Tab label='Descripción'>
          <p>tab 2</p>
        </Tab>
        <Tab label='imagenes'>
          <p>tab 3</p>
        </Tab>
        <Tab label='Variaciones'>
          <p>tab 4</p>
        </Tab>
        <Tab label='Categorías'>
          <p>tab 5</p>
        </Tab>
        <Tab label='Otros'>
          <p>Otros</p>
        </Tab>
        <Tab label='Maketplace'>
          <p>Maketplace</p>
        </Tab>
      </Tabs>
      {/* <Form onSubmit={onSubmit} handleSubmit={handleSubmit}>
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

          <InputSelect
            division={2}
            id='status'
            placeholder='Estado'
            errors={errors}
            control={control}
            rules={{ required: true }}
            list={states}
          />
        </div>
      </Form> */}
    </GeneralPage>
  );
};

export default Publication;
