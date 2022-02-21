import { Routes, Route } from 'react-router-dom';
import Basket from './components/pages/Basket'
import HomePage from './components/pages/HomePage'
import NotFound from './components/pages/NotFound'
import Header from './components/Header'
import CssBaseline from '@mui/material/CssBaseline';
import Catalog from './components/pages/Catalog'
function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Header />


      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/product" element={<Basket />} />
        <Route path="*" element={<NotFound />} />
      </Routes>


    </div>
  );
}

export default App;
