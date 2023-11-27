import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from "./header"
import Home from "./Home"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Home />
    <App />
  </React.StrictMode>
);
 

