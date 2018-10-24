import React from 'react';

import logo from '../../logo.svg';
import './Welcome.css';

export default function Welcome(props) {
  return (
    <div className="Welcome">
      <header className="Welcome-header">
        <img src={ logo } className="Welcome-logo" alt="logo"/>
        <p>welcome to react</p>
      </header>
    </div>
  )
}