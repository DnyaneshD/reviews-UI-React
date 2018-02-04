import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import configureStore from './store/configureStore';
import App from './components/App/App.js';
import AddReview from './components/AddReview/AddReview.js';
import { BrowserRouter } from 'react-router-dom';
import { Link, Switch, Route } from 'react-router-dom';

const store = configureStore();

ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
    <div>
      <Link to="/home">Home</Link>{' '}
      <Link to="/addNew">Add Review</Link>
      
      <Switch>
        <Route path="/home" component={App} />
        <Route path="/addNew" component={AddReview} />
      </Switch>
    </div>
  </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);