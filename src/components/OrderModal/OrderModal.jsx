import React, { useState } from 'react';
import './OrderModal.scss';

const OrderModal = ({ isOpen, onClose, onOrderSuccess }) => {
    const [name, setName] = useState('');
    // ИСПРАВЛЕНО: Сразу ставим +7 по умолчанию
    const [phone, setPhone] = useState('+7 ');
    const [city, setCity] = useState('');
    const [delivery, setDelivery] = useState('cdek');

    const russianCities = [
        'Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург', 'Казань', 
        'Нижний Новгород', 'Челябинск', 'Самара', 'Омск', 'Ростов-на-Дону', 
        'Уфа', 'Красноярск', 'Воронеж', 'Пермь', 'Волгоград', 'Краснодар', 'Сочи'
    ];

    if (!isOpen) return null;

    // ИСПРАВЛЕНО: Умный ввод телефона строго с неудаляемым +7
    const handlePhoneChange = (e) => {
        const input = e.target.value;

        // Если юзер пытается стереть "+7 ", мы принудительно возвращаем его назад
        if (input.length < 3) {
            setPhone('+7 ');
            return;
        }

        // Очищаем введенную хвостовую часть от любых символов, кроме цифр
        const digitsAfterPrefix = input.slice(3).replace(/[^\d]/g, '');

        // 10 цифр самого номера + 1 цифра семерки на старте = итого 11 цифр в длину
        if (digitsAfterPrefix.length <= 10) {
            setPhone(`+7 ${digitsAfterPrefix}`);
        }
    };

    // Фокус на инпут автоматически подставляет префикс, если поле было пустым
    const handlePhoneFocus = () => {
        if (!phone) {
            setPhone('+7 ');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const nameWords = name.trim().split(/\s+/);
        if (nameWords.length < 2) {
            alert('Пожалуйста, введите имя и фамилию через пробел');
            return;
        }

        // Извлекаем чистые цифры для проверки длины (должно быть ровно 11 штук с учетом семерки)
        const pureDigits = phone.replace(/[^\d]/g, '');
        if (pureDigits.length < 11) {
            alert('Номер телефона должен содержать ровно 11 цифр (включая +7)');
            return;
        }

        if (!city.trim()) {
            alert('Пожалуйста, выберите или введите город доставки');
            return;
        }

        const orderNumber = `SI-${Math.floor(1000 + Math.random() * 9000)}`;
        
        onOrderSuccess(nameWords[0], orderNumber);
        
        setName('');
        setPhone('+7 '); // Сбрасываем обратно в дефолтный префикс
        setCity('');
        setDelivery('cdek');
        
        onClose();
    };

    return (
        <div className="order__modal-overlay" onClick={onClose}>
            <div className="order__modal" onClick={(e) => e.stopPropagation()}>
                <button className="order__modal-close-btn" onClick={onClose}>✕</button>
                
                <h2 className="order__modal-title">Оформление заказа</h2>
                
                <form className="order__modal-form" onSubmit={handleSubmit}>
                    
                    <div className="order__modal-field">
                        <label className="order__modal-label">Имя и Фамилия</label>
                        <input 
                            type="text" 
                            className="order__modal-input" 
                            placeholder="Иван Иванов"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="order__modal-field">
                        <label className="order__modal-label">Телефон</label>
                        <input 
                            type="text" 
                            className="order__modal-input" 
                            placeholder="+7 (999) 999-99-99"
                            value={phone}
                            onChange={handlePhoneChange}
                            onFocus={handlePhoneFocus}
                            required
                        />
                    </div>

                    <div className="order__modal-field">
                        <label className="order__modal-label">Город доставки</label>
                        <input 
                            type="text" 
                            className="order__modal-input" 
                            placeholder="Выберите или введите город"
                            list="cities-list"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required
                        />
                        <datalist id="cities-list">
                            {russianCities.map((item, index) => (
                                <option key={index} value={item} />
                            ))}
                        </datalist>
                    </div>

                    <div className="order__modal-field">
                        <label className="order__modal-label">Способ доставки</label>
                        <select
                            className="order__modal-select"
                            value={delivery}
                            onChange={(e) => setDelivery(e.target.value)}
                        >
                            <option value="cdek">СДЭК (Быстро / До склада или двери)</option>
                            <option value="post">Почта России (В любое отделение)</option>
                        </select>
                    </div>

                    <button type="submit" className="order__modal-submit-btn">
                        Подтвердить заказ
                    </button>

                </form>
            </div>
        </div>
    );
};

export default OrderModal;
