import { useState } from 'react';
import { Link } from 'react-router-dom';
import Search from '../../components/Search/Search';
import './Header.scss';

const Header = ({ setSearchQuery, favorites, cart }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // Стейт для мобильной лупы (будет переключать класс в CSS)
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <header className="header">
            <div className="header__inner container">

                {/* БУРГЕР СЛЕВА */}
                <button
                    className={`header__burger ${isMenuOpen ? 'header__burger--active' : ''}`}
                    onClick={() => {
                        setIsMenuOpen(!isMenuOpen);
                        setIsSearchOpen(false);
                    }}
                    aria-label="Открыть меню"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* ЛОГОТИП ПО ЦЕНТРУ */}
                <Link to="/" className="header__logo" loading="eager" onClick={() => { setIsMenuOpen(false); setIsSearchOpen(false); }}>
                    <img className='header__logo-images' src="../src/assets/icons/Stone-Island-Logo.svg" alt="Логотип" />
                </Link>

                {/* ВЫЕЗЖАЮЩАЯ ШТОРКА БУРГЕРА */}
                <nav className={`header__menu ${isMenuOpen ? 'header__menu--open' : ''}`}>
                    <ul className="header__menu-list">
                        <li className="header__menu-item">
                            <Link to="/catalog/clothing" className="header__menu-link">Одежда</Link>
                        </li>
                        <li className="header__menu-item">
                            <Link to="/catalog/shoes" className="header__menu-link">Обувь</Link>
                        </li>
                        <li className="header__menu-item">
                            <Link to="/catalog/accessories" className="header__menu-link" onClick={() => setIsMenuOpen(false)}>Аксессуары</Link>
                        </li>
                        <li className="header__menu-item">
                            <Link to="/brands" className="header__menu-link" onClick={() => setIsMenuOpen(false)}>Бренды</Link>
                        </li>
                        <li className="header__menu-item">
                            <a href="#" className="header__menu-link" id='header__link-discounts' onClick={() => setIsMenuOpen(false)}>Скидки</a>
                        </li>
                    </ul>
                </nav>

                {/* ЕДИНСТВЕННАЯ ФОРМА ПОИСКА НА ВЕСЬ ХЕДЕР:
                    Мы добавили сюда динамический класс активности ${isSearchOpen ? 'header__form--open' : ''} */}
                <form className={`header__form ${isSearchOpen ? 'header__form--open' : ''}`} role="search">
                    <div className="header__form-body">
                        <Search setSearchQuery={setSearchQuery} />
                    </div>
                </form>

                {/* БЛОК ИКОНОК И ДЕЙСТВИЙ */}
                <div className="header__actions">

                    {/* МОБИЛЬНАЯ КНОПКА-ЛУПА */}
                    <button
                        className={`header__search-toggle ${isSearchOpen ? 'header__search-toggle--active' : ''}`}
                        onClick={() => {
                            setIsSearchOpen(!isSearchOpen);
                            setIsMenuOpen(false);
                        }}
                        aria-label="Поиск по сайту"
                    >
                        <svg className="header__action-images" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </button>

                    <Link to="/favorites" className="header__action-btn" aria-label="Избранное" onClick={() => setIsSearchOpen(false)}>
                        <img className='header__action-images' src="../src/assets/icons/heart-icon.svg" alt="Избранное" />
                        {favorites.length > 0 && (
                            <span className="header__badge">{favorites.length}</span>
                        )}
                    </Link>

                    <Link to="/cart" className="header__action-btn" aria-label="Корзина покупок" onClick={() => setIsSearchOpen(false)}>
                        <img className='header__action-images' src="../src/assets/icons/shopping-bag.svg" alt="Корзина" />
                        {cart.length > 0 && (
                            <span className="header__badge header__badge--cart">{cart.length}</span>
                        )}
                    </Link>
                </div>
            </div>

            {isMenuOpen && (
                <div className="header__overlay" onClick={() => setIsMenuOpen(false)}></div>
            )}
        </header>
    );
};

export default Header;
