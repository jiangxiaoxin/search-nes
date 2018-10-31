import React, { Component } from 'react';
import './App.css';

import Counter from './counter/Counter.jsx';

class App extends Component {

  render() {
    return (
      <div>
        <Counter />
        <button onClick={ () => { console.log('app log', this.props) }}>app button log store</button>
      </div>
    )
  }
}

export default App;
