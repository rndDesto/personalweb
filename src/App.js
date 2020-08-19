import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader/root';
import { Router } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import pages from './pages';
import { routes } from './configs/routes';

const App = ({ history, store }) => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route component={pages.Login} exact path={routes.LOGIN()} />
        <Route component={pages.WelcomePage} exact path={routes.WELCOMEPAGE()} />
        <Route component={pages.Admin} path={routes.ADMIN()} />
        <Route component={pages.Error404} />
      </Switch>
    </Router>
  </Provider>
);


const AdminRoot = () => {
  console.log("mantap")
  return(
    <Fragment>
      Admin
    </Fragment>
  );
};

export default hot(App);

App.propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
};
