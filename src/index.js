import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  HashRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Terms from './Terms';
import Privacy from './privacy';
import Login from './pages/Login'
import Footer from './Components/Footer';
import Dashboard from './Components/Dashboard/Dashboard'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/"><App /></Route>
        <Route exact path="/terms"><Terms /></Route>
        <Route exact path="/privacy"><Privacy /></Route>
        <Route exact path="/login"><Login /></Route>
        <Route exact path="/dashboard"><Dashboard /></Route>
      </Switch>
      <Footer></Footer>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
