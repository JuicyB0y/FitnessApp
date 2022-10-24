import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar.js';
import Home from './pages/Home.js';
import ExerciseDetail from './pages/ExerciseDetail.js';
import Footer from './components/Footer.js';

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
