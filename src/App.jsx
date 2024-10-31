import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './assets/componentes/Footer';
import Navbar from './assets/componentes/Navbar';
import Cart from './assets/Pages/Cart';
import Home from './assets/Pages/Home';
import Login from './assets/Pages/Login';
import NotFound from './assets/Pages/NotFound';
import Pizza from './assets/Pages/Pizza';
import Profile from './assets/Pages/Profile';
import Register from './assets/Pages/Register';
import { CartProvider } from './assets/Context/CartContext';
import { useState } from 'react';

const App = () => {
  const [token, setToken] = useState(false);
  return (
      <div className='App'>
        <CartProvider>
        <Navbar token={token}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizza/p001" element={<Pizza />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
        </CartProvider>
      </div>
  );
}

export default App;