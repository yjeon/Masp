import React from 'react';
import ReactDOM from 'react-dom';
import NavLoader from './NavLoader';
import FootLoader from './FootLoader';
import './style.css';

ReactDOM.render(
  <NavLoader text="masp"/>,
  document.getElementById('navbar-logo-container')
);

ReactDOM.render(
  <FootLoader />,
  document.getElementById('footer-container')
);
