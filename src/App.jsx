import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// ИМПОРТЫ КОМПОНЕНТОВ И СТРАНИЦ (Проверь пути, если они у тебя лежали по-другому)
import Header from './layouts/Header/Header';
import Footer from './layouts/Footer/Footer';
import Product from './pages/Product/Product';
import ProductPage from './pages/ProductPage/ProductPage';
import Brand from './pages/Brand/Brand';
import Favorites from './pages/Favorites/Favorites';
import Cart from './pages/Cart/Cart';

// ИМПОРТ БАЗЫ ДАННЫХ
import { productsData } from './data';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Состояния для избранного и корзины с ленивой инициализацией из localStorage
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  // Наш стейт для плавной загрузки прелоадера
  const [isLoading, setIsLoading] = useState(true);

  // Таймер прелоадера на 1.5 секунды
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Синхронизация с localStorage
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // ФУНКЦИИ ИНТЕРАКТИВА (ТВОИ РОДНЫЕ)
  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const addToCart = (product, size) => {
    setCart(prevCart => {
      const isExist = prevCart.find(item => item.id === product.id && item.size === size);
      if (isExist) {
        return prevCart.map(item => 
          item.id === product.id && item.size === size 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prevCart, { ...product, size, quantity: 1 }];
    });
  };

  const changeQuantity = (id, size, action) => {
    setCart(prevCart => 
      prevCart.map(item => {
        if (item.id === id && item.size === size) {
          let newQty = action === 'plus' ? item.quantity + 1 : item.quantity - 1;
          if (newQty < 1) newQty = 1;
          // Ограничиваем лимит 10 штуками, как мы настраивали
          if (newQty > 10) newQty = 10;
          return { ...item, quantity: newQty };
        }
        return item;
      })
    );
  };

  const removeFromCart = (id, size) => {
    setCart(prevCart => prevCart.filter(item => !(item.id === id && item.size === size)));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <Router>
      <div style={{ position: 'relative', minHeight: '100vh' }}>
        
        {/* ПРЕЛОАДЕР: рендерится поверх сайта и плавно тает по классу --hidden */}
        <div className={`preloader ${!isLoading ? 'preloader--hidden' : ''}`}>
          <div className="preloader__logo-box">
            <img 
              src="../src/assets/icons/stone-island-brands.svg" 
              alt=''
              className="preloader__logo"
            />
          </div>
        </div>

        {/* ТВОЙ САЙТ: полностью готов и прогружен в фоне под прелоадером */}
        <Header setSearchQuery={setSearchQuery} favorites={favorites} cart={cart} />
        
        <Routes>
          <Route path="/" element={<Navigate to="/catalog/clothing" replace />} />
          <Route path="/catalog/:catalogType" element={<Product searchQuery={searchQuery} favorites={favorites} toggleFavorite={toggleFavorite} />} />
          <Route path="/product/:id" element={<ProductPage addToCart={addToCart} />} />
          <Route path="/brands" element={<Brand />} />
          <Route path="/favorites" element={<Favorites favorites={favorites} toggleFavorite={toggleFavorite} />} />
          <Route path="/cart" element={<Cart cart={cart} changeQuantity={changeQuantity} removeFromCart={removeFromCart} clearCart={clearCart} />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;
