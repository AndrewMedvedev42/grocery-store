import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { configureStore } from './redux/configureStore'

import App from './App.tsx';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import './assets/styles/index.css';
import './assets/styles/compiledScss/index.css';
import './assets/styles/compiledScss/components/footer.css';
import 'antd/dist/antd.css';

const {store, persistor} = configureStore()
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();