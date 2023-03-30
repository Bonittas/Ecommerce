import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import list from './components/list';
import Register from './components/Register';
import Home from './components/Home';
import Signup from './components/Signup';
import Header from './components/Header';

import Login from './components/Login';
export default function App() {

  return (
  
    <BrowserRouter>  <list/>
    <Routes>
    
      <Route path="/header" element={<Header />}/>
        <Route index element={<Home />} />
     
        <Route path="/Signup" element={<Signup />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
     
   
    </Routes>
  
  </BrowserRouter>
  );}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
