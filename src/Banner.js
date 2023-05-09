'use strict';
import React from 'react';
import './index.css';

function Banner(props) {
  return (
    <div className="banner">
      <h2 className="banner__title">{props.title}</h2>
      <p className="banner__text">{props.text}</p>
      <div className="banner__buttons">
        <button className="banner__button banner__button--primary">primary</button>
        <button className="banner__button banner__button--secondary">secondary</button>
      </div>
    </div>
  );
}

export default Banner;
