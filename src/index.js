import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from './components/header/header'
import Footer from './components/footer/footer'

import './index.css';
import './assets/css/blobz.css';

if(process.env.NODE_ENV=="development"){
  require('dotenv').config()
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Switch>
          <Route component={App} />
        </Switch>
        <Footer/>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
