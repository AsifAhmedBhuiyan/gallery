'use strict';

import React from 'react';
import './index.css';

function Button(props) {
  const buttonClass = props.type === 'primary' ? 'banner__button--primary' : 'banner__button--secondary';

  return (
    <button className={`banner__button ${buttonClass}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;