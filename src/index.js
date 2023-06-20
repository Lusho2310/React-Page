import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Contact from "./NavItems/Contact";
import Blog from "./NavItems/Blog";
import NavBar from "./NavBar";
import Galery from "./NavItems/Galery";
import Fondo from "./NavItems/Home";
import CardHover from "./NavItems/Images";
import Footer from "./footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
     <Router>
      <NavBar />
      <div className='pages'>
        <Routes>
          <Route path='/' element={<Galery />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/home' element={<Fondo />} />
          <Route path='/images' element={<CardHover />} />
        </Routes>
      </div>
    </Router>
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
