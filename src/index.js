import React from 'react';
import ReactDOM from 'react-dom';
import SignInModalTrigger from './SignInModalTrigger';
import SignUpModalTrigger from './SignUpModalTrigger';
import firebase from 'firebase';
import ReactFire from 'reactfire';
import './style.css';

ReactDOM.render(
  <SignInModalTrigger />,
  document.getElementById('sign-in-link')
);

ReactDOM.render(
  <SignUpModalTrigger />,
  document.getElementById('sign-up-link')
);
