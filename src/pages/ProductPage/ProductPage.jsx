import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom';
import { productsData } from '../../data';
import Toast from '../../components/Toast/Toast'; // 1. ДОБАВИЛИ ИМПОРТ НОВОГО КОМПОНЕНТА
import './ProductPage.scss';

const ProductPage = ({ addToCart }) => {
    const { id } = useParams();
    const [selectedSize, setSelectedSize] = useState('');
    const navigate = useNavigate();

    // 2. ДОБАВИЛИ СТЕЙТЫ ДЛЯ КРАСИВЫХ УВЕДОМЛЕНИЙ
    const [toastMessage, setToastMessage] = useState('');
    const [toastType, setToastType] = useState(''); // 'success' или 'error'

    // Функция для запуска и авто-скрытия плашки через 3 секунды
    const showToast = (message, type) => {
        setToastMessage(message);
        setToastType(type);

        setTimeout(() => {
            setToastMessage('');
            setToastType('');
        }, 3000);
    };

    const currentProduct = productsData.find(item => item.id === Number(id));
    // Ищем товар по ID

    if (!currentProduct) {
        return (
            <div className="container product-page-error">
                <h2>Товар не найден</h2>
                <Link to="/" className="product-page-error__link">Вернуться на главную</Link>
            </div>
        );
    }

    // 3. ДОБАВИЛИ ФУНКЦИЮ НАЖАТИЯ НА КНОПКУ КОРЗИНЫ
    const handleAddToCartClick = () => {
        // Если размер не выбран — триггерим красную ошибку и не пускаем дальше
        if (!selectedSize) {
            showToast('Пожалуйста, выберите размер перед добавлением в корзину!', 'error');
            return;
        }

        // Если всё чётко — отправляем в App.jsx
        addToCart(currentProduct, selectedSize);
        
        // Показываем чёрную плашку успеха
        showToast(`Товар успешно добавлен в корзину!`, 'success');
        
        // Гасим активную кнопку размера
        setSelectedSize('');
    };

    return (
        <section className="product-page container">
            <button onClick={() => navigate(-1)} className="product-page__back-link">
                ← Назад
            </button>

            <div className="product-detail">
                <div className="product-detail__image-box">
                    <img
                        src={currentProduct.imgSrc}
                        alt={currentProduct.brand}
                        className="product-detail__img"
                    />
                </div>

                <div className="product-detail__info">
                    <h1 className="product-detail__title">{currentProduct.description}</h1>
                    <span className="product-detail__brand">{currentProduct.brand}</span>
                    <div className="product-detail__description">
                        <h3 className="product-detail__subtitle">Описание товара:</h3>
                        <p className="product-detail__text">
                            {currentProduct.fullDescription || currentProduct.description}
                        </p>
                    </div>
                    <p className="product-detail__price">{currentProduct.price}</p>

                    <div className="product-detail__size">
                        <p className="product-detail__size-title">Доступные размеры:</p>
                        <div className="product-detail__size-list">
                            {currentProduct.sizes.map((size, index) => (
                                <button
                                    key={index}
                                    className={`product-detail__size-btn ${selectedSize === size ? 'product-detail__size-btn--active' : ''}`}
                                    onClick={() => setSelectedSize(size)}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Вызываем нашу новую чистую функцию handleAddToCartClick */}
                    <button className="product-detail__btn" onClick={handleAddToCartClick}>
                        Добавить в корзину
                    </button>
                </div>
            </div>

            {/* 4. ВСТАВИЛИ КОМПОНЕНТ ТОСТА В САМЫЙ НИЗ РАЗМЕТКИ */}
            <Toast message={toastMessage} type={toastType} />
        </section>
    );
};

export default ProductPage;
