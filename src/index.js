import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Engine from './components/Engine';
import Games from './components/Games';
import About from './components/About';
import Error from './components/Error';
import reportWebVitals from './reportWebVitals';


// This is used to route the website and its pages and assign them URLS
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route path='engine' element={<Engine/>}/>
          <Route path='games' element={<Games/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='*' element={<Error/>}/>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
