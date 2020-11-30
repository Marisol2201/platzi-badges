/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';

import './styles/PageError.css';

function PageError(props) {
  return <div className="PageError">❌{props.error.message}😱</div>;
}

export default PageError;