import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import Posts from './components/Posts';
import Postform from './components/Postform';

const store = createStore ( () => [], {}, applyMiddleware() )

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Postform />
          <hr />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
