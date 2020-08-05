import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { routes } from '../../../configs/routes';

const AdminBase = ({ children }) => {
  return (
    <div>
      Layout AdminBase

      <li>
        <Link to={routes.EXPERIENCE()}>Experience</Link>
      </li>
      <div>
        {children}
      </div>
    </div>
  );
};

AdminBase.defaultProps = {
  children: null,
};

AdminBase.propTypes = {
  children: PropTypes.node,
};

export default AdminBase;
