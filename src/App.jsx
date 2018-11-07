import React, { Component } from 'react';
import './App.css';

// import Counter from './counter/Counter.jsx';

import CounterSaga from './counter-saga/Counter.jsx';

import { Provider } from "react-redux";

// import store from './counter/store';

import store from './counter-saga/store';

class App extends Component {

  render() {
    return (
      <Provider store={ store }>
        <div>

          <CounterSaga />

          {/* <Counter />
          <button onClick={ () => { console.log('app log', this.props) }}>app button log store</button> */}
        
        </div>
      </Provider>
    )
  }
}

export default App;
