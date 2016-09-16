import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/reducer';

ReactDOM.render(
    <Provider store={createStore(reducer)}>
        <App />
    </Provider>,
  document.getElementById('root')
);
