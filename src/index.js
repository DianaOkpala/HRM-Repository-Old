import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import App from './components/App';
import Leave from './components/Leave';
import * as serviceWorker from './serviceWorker';
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//ReactDOM.render(<App />, document.getElementById('root'));


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="leave" element={<Leave />} />
      
    </Routes>
  </BrowserRouter>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
