import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Product from './pages/Product/Product';
import Favorites from './pages/Favorites/Favorites';
import Cart from './pages/Cart/Cart';
import './styles/helpers/index.scss';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Состояния для корзины и избранного
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  
  const [favorites, setFavorites] = useState(() => {
    const savedFavs = localStorage.getItem('favorites');
    return savedFavs ? JSON.parse(savedFavs) : [];
  });

  // Синхронизация с LocalStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Функции для работы с избранным
  const toggleFavorite = (product) => {
    if (favorites.some(fav => fav.id === product.id)) {
      setFavorites(favorites.filter(fav => fav.id !== product.id));
    } else {
      setFavorites([...favorites, product]);
    }
  };

  // Функции для работы с корзиной
  const addToCart = (product, size) => {
    const numericPrice = typeof product.price === 'number' 
      ? product.price 
      : parseInt(product.price.toString().replace(/[^\d]/g, ''), 10) || 0;

    const existingItem = cart.find(item => item.id === product.id && item.size === size);

    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id && item.size === size 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      ));
    } else {
      setCart([...cart, { ...product, size, quantity: 1, numericPrice }]);
    }
  };

  const changeQuantity = (id, size, type) => {
    setCart(cart.map(item => {
      if (item.id === id && item.size === size) {
        if (type === 'plus') {
          return { ...item, quantity: item.quantity + 1 };
        } else if (type === 'minus' && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
      }
      return item;
    }));
  };

  const removeFromCart = (id, size) => {
    setCart(cart.filter(item => !(item.id === id && item.size === size)));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    /* ЖЕСТКИЙ ФИКС: Вшили basename прямо в корень App для GitHub Pages */
    <BrowserRouter basename="/MyProjectStor">
      <div className="app-wrapper">
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)} favCount={favorites.length} />
        
        <main className="main-content">
          <Routes>
            <Route path="/catalog/:catalogType" element={<Product searchQuery={searchQuery} favorites={favorites} toggleFavorite={toggleFavorite} />} />
            <Route path="/product/:id" element={<ProductPage addToCart={addToCart} favorites={favorites} toggleFavorite={toggleFavorite} />} />
            <Route path="/favorites" element={<Favorites favorites={favorites} toggleFavorite={toggleFavorite} />} />
            <Route path="/cart" element={<Cart cart={cart} changeQuantity={changeQuantity} removeFromCart={removeFromCart} clearCart={clearCart} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
