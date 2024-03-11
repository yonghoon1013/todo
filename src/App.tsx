import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
