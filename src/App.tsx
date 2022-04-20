import React from 'react';
import logo from './logo.svg';
import './App.css';
import { applyMiddleware, createStore } from 'redux';
import reducers from './redux/reducers';
import ReduxThunkMiddleWare from 'redux-thunk';
import { Provider } from 'react-redux';
import TestingReduxComponent from './components/TestingReduxComponent';

function App() {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunkMiddleWare));
  return (
    <Provider store={store}>
      <TestingReduxComponent />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Provider>
  );
}

export default App;

