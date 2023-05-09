'use strict';

import React from 'react';
import Header from './Header';
import Banner from './Banner';
import Button from './Button';
import Gallery from './Gallery';
import './index.css'; 
import './App.css';

function App() {
  const bannerText = 'Welcome to my page';
  const bannerButtons = [
    { text: 'primary', type: 'primary' },
    { text: 'secondary', type: 'secondary' },
  ];
  const galleryImages = [
    'https://picsum.photos/200/200?random=1',
    'https://picsum.photos/200/200?random=2',
    'https://picsum.photos/200/200?random=3',
    'https://picsum.photos/200/200?random=4',
  ];

  return (
    <div className="app">
      <Header />
      <Banner text={bannerText}>
        {bannerButtons.map((button, index) => (
          <Button key={index} type={button.type}>{button.text}</Button>
        ))}
      </Banner>
      <Gallery images={galleryImages} />
      <footer className="footer">© 2023 My Gallery Website. All rights reserved.</footer>
    </div>
  );
}

export default App;
