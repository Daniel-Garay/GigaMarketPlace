import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFetchGet, fetchData } from '../../../Hooks/hookFetch';
import GeneralPage from '../../organism/GeneralPage/GeneralPage';
import { addNotification } from '../../../actions';
import { setLoginData } from '../Login/loginActions';
import config from '../../../utils/config';
import { DashboardStyle, Market } from './dashboardStyle';
import MLLogo from '../../../assets/static/ml-logo.svg';
import LinioLogo from '../../../assets/static/linio-logo.svg';

const Dashboard = ({ location }) => {
  const dispatch = useDispatch();
  const user = useSelector(({ user }) => user);
  const name = user.name || '';
  const authMLLink = useFetchGet(`${config.urlApi}/api/ml/generateLink`);
  const { data } = authMLLink;
  const markets = [
    { id: 'ml', description: 'Mercado Libre', link: data, active: user.hasMl, logo: MLLogo },
    { id: 'linio', description: 'Linio', link: null, active: user.hasLinio, logo: LinioLogo },
  ];

  useEffect(() => {
    const code = new URLSearchParams(location.search).get('code');
    const userId = user._id;
    if (code) {
      const body = { code, userId };

      fetchData(`${config.urlApi}/api/ml/auth`, 'post', null, body).then((res) => {
        const { data } = res;
        if (data === userId) {
          dispatch(addNotification({ type: 'success', message: 'Cuenta asociada correctamente' }));
          dispatch(setLoginData({ ...user, hasMl: true }));
        }
      });
    }
  }, [location.search]);

  const getMarket = (market) => {
    const { active, link, logo } = market;
    const href = active ? null : link;
    const target = active ? null : '_blank';
    const status = active ? 'Conectado' : 'Desconectado';

    return (
      <Market href={href} target={target} active={active}>
        <span>{status}</span>
        <img src={logo} alt='Mercado Libre' />
      </Market>
    );
  };

  return (
    <GeneralPage title='Dashboard'>
      <DashboardStyle>
        <h3 className='title'>{`Bienvenido ${name}`}</h3>

        <p>Puedes asociar los MarketPlaces en los cuales quieres vender.</p>

        <h3 className='title'>MarketPlaces</h3>

        <div className='markets'>{markets.map((market) => getMarket(market))}</div>
      </DashboardStyle>
    </GeneralPage>
  );
};

export default Dashboard;
