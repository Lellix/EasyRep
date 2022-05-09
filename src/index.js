import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bulma/css/bulma.min.css"

import Header from './views/header';
import Home from './views/home';
import Rep from './views/rep';
import About from './views/About';
import Footer from './views/footer'

import Routes from './routers';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);

