import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { CombinedState, combineReducers, configureStore } from '@reduxjs/toolkit';
import commentsFromBookReducer from "./states/commentsState"
import booksReducer from './states/booksState'

const reducer = combineReducers({
  commentsSlice: commentsFromBookReducer, 
  bookSlice: booksReducer
}) /*serve per contenere gli stati, i reducer*/ 
const store = configureStore({
  reducer
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    
  </React.StrictMode>
);


