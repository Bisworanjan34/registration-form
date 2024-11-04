import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
import myStore from './redux/store/store.js';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <Provider store={myStore}>
  <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
  </BrowserRouter>
    </Provider>
);

