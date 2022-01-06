import React, { Component } from 'react';
import './App.css';
import Calc from './components/Calculator';
// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div>
        <Calc />
      </div>
    );
  }
}

export default App;
