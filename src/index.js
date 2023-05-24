

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from '../node_modules/react-router-dom/dist/index';
import { Provider } from '../node_modules/react-redux/es/exports';
import { persistor, store } from './redux/Store';
import { PersistGate } from 'redux-persist/integration/react'
import { app } from './firebase.config';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} app={app}>
  <BrowserRouter>
  <React.StrictMode>
    <PersistGate loading={"loading"} persistor={persistor}>
    <App />
    </PersistGate>
  </React.StrictMode>
  </BrowserRouter>
  </Provider>
);


