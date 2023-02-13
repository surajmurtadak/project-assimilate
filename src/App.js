// import React,{useState, useEffect, Component} from 'react';
import Navbar from './components/Navbar';
import './App.css';
import MoviesContainer from './components/MoviesComponent';
import SubNav from './components/SubNav';
import Upload from './components/Upload';
import SortByM from './components/SortByM';
import SortByP from './components/SortByP';
import SortByIMDB from './components/SortByIMDB';
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
          <Route path= "/sortByMovie" element={<><SubNav/><SortByM/></>} />
          <Route path= "/sortByPopularity" element={<><SubNav/><SortByP/></>} />
          <Route path= "/sortByIMDB" element={<><SubNav/><SortByIMDB/></>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
