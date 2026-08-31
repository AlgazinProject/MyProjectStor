import { useState } from 'react';
import { Link } from 'react-router-dom';
import Toast from '../../components/Toast/Toast'; 
import OrderModal from '../../components/OrderModal/OrderModal'; // Импортируем нашу модалку
import './Cart.scss';

const Cart = ({ cart, changeQuantity, removeFromCart, clearCart }) => {
    const [toastMessage, setToastMessage] = useState('');
    const [toastType, setToastType] = useState('');
    
    // Стейт для управления открытием и закрытием модального окна
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showToast = (message, type) => {
        setToastMessage(message);
        setToastType(type);

        setTimeout(() => {
            setToastMessage('');
            setToastType('');
        }, 3000);
    };

    // ФУНКЦИЯ-ПОМОЩНИК: Очищает цену от любых букв, пробелов, знаков ₽ и делает её числом
    const getCleanPrice = (priceValue) => {
        if (typeof priceValue === 'number') return priceValue;
        if (!priceValue) return 0;
        const cleanStr = String(priceValue).replace(/[^\d]/g, '');
        return Number(cleanStr) || 0;
    };

    // Считаем общую сумму заказа с чистыми числами
    const totalPrice = cart.reduce((total, item) => {
        const price = getCleanPrice(item.price);
        return total + (price * item.quantity);
    }, 0);

    // Клик по твоей кнопке теперь плавно открывает окно заказа
    const handleCheckoutClick = () => {
        setIsModalOpen(true);
    };

    // ФУНКЦИЯ УСПЕШНОЙ ОТПРАВКИ ФОРМЫ (Вызывается внутри OrderModal)
    const handleOrderSuccess = (customerName, orderNumber) => {
        // Триггерим твой кастомный тост с сочным текстом и номером заказа
        showToast(`${customerName}, заказ №${orderNumber} успешно оформлен! Спасибо за покупку.`, 'success');

        // Плавно очищаем корзину через секунду, чтобы юзер успел прочитать уведомление
        setTimeout(() => {
            clearCart();
        }, 1000);
    };

    if (cart.length === 0) {
        return (
            <>
                <div className="container cart__page-empty">
                    <h1 className="cart__page-title">Корзина покупок</h1>
                    <p className="cart__page-empty-text">Ваша корзина пока пуста</p>
                    <Link to="/" className="cart__page-empty-btn">Перейти к покупкам</Link>
                </div>
                <Toast message={toastMessage} type={toastType} />
            </>
        );
    }

    return (
        <section className="cart__page container">
            <h1 className="cart__page-title">Корзина покупок</h1>
            
            <div className="cart__body">
                {/* ЛЕВЫЙ БЛОК: Твой оригинальный список товаров */}
                <div className="cart__list">
                    {cart.map((item) => {
                        const numericPrice = getCleanPrice(item.price);

                        return (
                            <div key={`${item.id}-${item.size}`} className="cart__item">
                                <button 
                                    className="cart__item-remove-btn" 
                                    onClick={() => removeFromCart(item.id, item.size)}
                                >
                                    &times;
                                </button>
                                
                                <img src={item.imgSrc} alt={item.brand} className="cart__item-img" />
                                
                                <div className="cart__item-info">
                                    <span className="cart__item-brand">{item.brand}</span>
                                    <h3 className="cart__item-desc">{item.description}</h3>
                                    <p className="cart__item-size">Размер: <span>{item.size}</span></p>
                                </div>

                                <div className="cart__item-quantity">
                                    <button className="cart__item-qty-btn" onClick={() => changeQuantity(item.id, item.size, 'minus')}>-</button>
                                    <span className="cart__item-qty-num">{item.quantity}</span>
                                    <button className="cart__item-qty-btn" onClick={() => changeQuantity(item.id, item.size, 'plus')}>+</button>
                                </div>

                                <p className="cart__item-price">{(numericPrice * item.quantity).toLocaleString('ru-RU')} ₽</p>
                            </div>
                        );
                    })}
                </div>

                {/* ПРАВЫЙ БЛОК: ТВОЯ ОРИГИНАЛЬНАЯ ВЕРСТКА TOTAL С КНОПКОЙ */}
                <div className="cart__total">
                    <h2 className="cart__total-title">Итого</h2>
                    
                    <div className="cart__total-item">
                        <span>Всего товаров:</span>
                        <span>{cart.reduce((total, item) => total + item.quantity, 0)} шт.</span>
                    </div>
                    
                    <div className="cart__total-final-price">
                        <span>Сумма к оплате:</span>
                        <span>{totalPrice.toLocaleString('ru-RU')} ₽</span>
                    </div>
                    
                    <button className="cart__total-btn" onClick={handleCheckoutClick}>
                        Оформить заказ
                    </button>
                </div>
            </div>

            {/* ВСТАВИЛИ КОМПОНЕНТ МОДАЛКИ ДЛЯ СВЯЗКИ */}
            <OrderModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                onOrderSuccess={handleOrderSuccess} 
            />

            {/* Твой оригинальный тост */}
            <Toast message={toastMessage} type={toastType} />
        </section>
    );
};

export default Cart;
