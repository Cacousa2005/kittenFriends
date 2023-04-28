import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './containers/App';
import 'tachyons';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
{/*Using createRoot will prevent error msg in the browser, since ReactDOM 
  is not supported after React 18*/}
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  );

reportWebVitals();
