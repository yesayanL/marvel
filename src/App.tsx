import React, {FC, useEffect} from 'react';
import {charactersList} from "./constants";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import HeroSinglePage from "./pages/hero-single-page";
import './App.css';


const App:FC = () => {
  useEffect(() => {
      if(!localStorage.getItem('list')){
          localStorage.setItem('list', JSON.stringify(charactersList))
      }
  }, [])
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="character/:id" element={<HeroSinglePage/>} />
          <Route path="*" element={"Not Found"} />
        </Routes>
      </BrowserRouter>

  );
}

export default App;
