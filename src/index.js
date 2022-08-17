import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import {combineReducers, configureStore} from '@reduxjs/toolkit'
import cartReducer from './redux/cartSlice';
import cardsSlice from './redux/cardsSlice';
import { Provider } from 'react-redux';


const rootReducer = combineReducers({
    cartState: cartReducer,
    cardsState: cardsSlice,
  })
export const store = configureStore({
    reducer: rootReducer
})



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      
           <App/> 
      </BrowserRouter>
    </Provider>
    
  </React.StrictMode>
);



reportWebVitals();
