import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Counter from './counter/counter'
import { Provider } from 'react-redux'

import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    );
  }
}

export default App;
