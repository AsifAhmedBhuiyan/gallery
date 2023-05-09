'use strict';

import React from 'react';
import './index.css';

function Gallery(props) {
  const images = props.images.map((image, index) => (
    <img className="gallery__image" key={index} src={image} alt={`Image ${index}`} />
  ));

  return <div className="gallery">{images}</div>;
}

export default Gallery;
