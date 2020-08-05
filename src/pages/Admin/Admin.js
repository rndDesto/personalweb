import React, { Fragment } from 'react';
import AdminBase from '../../components/layouts/AdminBase';
import { Route, Router, Switch, useHistory, useLocation } from 'react-router-dom';
import { routes } from '../../configs/routes';
import PropTypes from 'prop-types';
import pages from '..';




const Admin = ({ history }) => {
  const { goBack } = useHistory();
  const { pathname } = useLocation();

  return (
    <Fragment>
      <Router history={history}>
        <AdminBase>
          <Switch>
            <Route component={pages.Experience} exact path={routes.EXPERIENCE()} />
            {pathname === '/admin' ? '' : <Route component={() => <p onClick={()=>goBack()} >notfound</p>}/> }
          </Switch>
        </AdminBase>
      </Router>
    </Fragment>
  );
};


Admin.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Admin;
