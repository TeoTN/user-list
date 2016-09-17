import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import reducer from './reducers/reducer';
import App from './App';
import { HomeLayout, StateLayout, SettingsLayout } from './components/layouts/index';
import './assets/styles/index.css';
import './assets/styles/bootstrap.min.css';

ReactDOM.render(
    <Provider store={createStore(reducer)}>
        <Router history={browserHistory}>
            <Route component={App}>
                <Route path="/" component={HomeLayout} />
                <Route path="/state" component={StateLayout} />
                <Route path="/settings" component={SettingsLayout} />
            </Route>
        </Router>
    </Provider>,
  document.getElementById('root')
);
