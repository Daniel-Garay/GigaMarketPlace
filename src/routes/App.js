import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../utils/history';

import Layout from '../containers/Layout';
import LayoutBasic from '../containers/LayoutBasic';

import Login from '../components/pages/Login/Login';
import SignIn from '../components/pages/Login/SignIn';

import Dashboard from '../components/pages/Dashboard/Dashboard';
import Products from '../components/pages/Products/Products';
import Product from '../components/pages/Products/Product/Product';
import Users from '../components/pages/Users/Users';
import User from '../components/pages/Users/User';
import Orders from '../components/pages/Orders/Orders';
import Order from '../components/pages/Orders/Order';
import LogList from '../components/pages/Log/LogList';

const App = () => (
  <Router history={history}>
    <Switch>
      <Route
        exact
        path={[
          '/dashboard',
          '/products',
          '/products/:id',
          '/users',
          '/users/:id',
          '/orders',
          '/orders/:id',
          '/log',
        ]}
      >
        <Layout>
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/products' component={Products} />
          <Route exact path='/products/:id' component={Product} />
          <Route exact path='/users' component={Users} />
          <Route exact path='/users/:id' component={User} />
          <Route exact path='/orders' component={Orders} />
          <Route exact path='/orders/:id' component={Order} />
          <Route exact path='/log' component={LogList} />
        </Layout>
      </Route>

      <Route exact path={['/', '/sign-in']}>
        <LayoutBasic>
          <Route exact path='/' component={Login} />
          <Route exact path='/sign-in' component={SignIn} />
        </LayoutBasic>
      </Route>

      <Route path={['*']}>
        <div>Error</div>
      </Route>
    </Switch>
  </Router>
);

export default App;