import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, combineReducers} from 'redux';
import { Provider } from 'react-redux';
import userReducer from './redux/userReducer';

const reducers = combineReducers({
  user: userReducer
});

const store =  createStore(reducers);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);