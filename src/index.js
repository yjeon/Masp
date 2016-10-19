import React from 'react';
import ReactDOM from 'react-dom';
import SignInModalTrigger from './SignInModalTrigger';
import SignUpModalTrigger from './SignUpModalTrigger';
import './style.css';

ReactDOM.render(
  <SignInModalTrigger />,
  document.getElementById('sign-in-link')
);

ReactDOM.render(
  <SignUpModalTrigger />,
  document.getElementById('sign-up-link')
);
