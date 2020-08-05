import React from 'react';
import PropTypes from 'prop-types';
import { autoPx } from '../../../utils/unit';

export default function IconUser({ fill }) {
  const r24 = autoPx(24);
  const d = `M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22
  17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66
  13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5
  19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97
  13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z`;

  return (
    <svg fill="none" height={r24} viewBox="0 0 24 24" width={r24} xmlns="http://www.w3.org/2000/svg">
      <path d={d} fill={fill} />
    </svg>
  );
}

IconUser.defaultProps = {
  fill: '#25282B',
};

IconUser.propTypes = {
  fill: PropTypes.string,
};
