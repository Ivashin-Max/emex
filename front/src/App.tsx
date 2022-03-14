import { Routes, Route } from 'react-router-dom';
import Basket from './components/pages/BasketPage';
import HomePage from './components/pages/UserPage';
import RolePage from './components/pages/RolePage';
import AdminPage from './components/pages/AdminPage';
import NotFound from './components/pages/NotFound';
import Header from './components/Header';
import CssBaseline from '@mui/material/CssBaseline';
import Catalog from './components/pages/Catalog';
import ItemPage from './components/pages/ItemPage';
import Search from './components/pages/Search';
import './styles/admin_page.css'

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Header />


      <Routes>
        <Route path="/" element={<RolePage />} />
        <Route path="/user" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/product" element={<ItemPage />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </div>
  );
}

export default App;
