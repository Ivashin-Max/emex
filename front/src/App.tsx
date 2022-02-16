import React from 'react';
import ItemsList from "./components/ItemsList"
import { Routes, Route, Link } from 'react-router-dom';
import Basket from './components/pages/Basket'
import ItemList from './components/ItemsList'
import HomePage from './components/pages/HomePage'
import NotFound from './components/pages/NotFound'
import Header from './components/Header'
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Header />


      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<ItemList />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="*" element={<NotFound />} />
      </Routes>


    </div>
  );
}

export default App;
