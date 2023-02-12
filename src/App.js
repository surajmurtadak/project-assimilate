// import React,{useState, useEffect, Component} from 'react';
import Navbar from './components/Navbar';
import './App.css';
import MoviesContainer from './components/MoviesComponent';
import SubNav from './components/SubNav';
import Upload from './components/Upload';
import {BrowserRouter,Route, Routes} from 'react-router-dom';

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
          <Route path= "/" element={<><SubNav/><MoviesContainer/></>} />
          <Route path= "/upload" element={<Upload/>} />
          <Route path= "/movie" element={<><SubNav/><MoviesContainer/></>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
