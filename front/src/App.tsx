import React from 'react';
import ItemsList from "./components/ItemsList"
import { Routes, Route, Link } from 'react-router-dom';
import Basket from './components/Basket'
import ItemList from './components/ItemsList'
import HomePage from './components/HomePage'
import NotFound from './components/NotFound'

function App() {
  return (
    <div className="App">
      <header>
        <Link to="/">Главная</Link>
        <Link to="/catalog">Каталог</Link>
        <Link to="/basket">Корзина</Link>
      </header>

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
