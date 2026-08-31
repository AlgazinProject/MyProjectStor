import { useEffect, useState } from 'react';
import { useSearchParams, useParams } from 'react-router-dom';
import { productsData } from '../../data';
import Card from '../../components/Card/Card';
import Filter from '../../components/Filter/Filter';
import './Product.scss';

const Product = ({ searchQuery = '', favorites, toggleFavorite }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeBrand, setActiveBrand] = useState('all');
  const [activeSize, setActiveSize] = useState([]);
  
  // НАШ НОВЫЙ СТЕЙТ ДЛЯ МУЛЬТИВЫБОРА ЦВЕТОВ
  const [activeColors, setActiveColors] = useState([]);

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100000);
  const [currentMin, setCurrentMin] = useState(0);
  const [currentMax, setCurrentMax] = useState(100000);

  const [secheParams] = useSearchParams();
  const { catalogType } = useParams();

  useEffect(() => {
    const brandFromUrl = secheParams.get('brand');
    if (brandFromUrl) {
      setActiveBrand(brandFromUrl);
    } else {
      setActiveBrand('all');
    }
  }, [secheParams]);

  useEffect(() => {
    setActiveCategory('all');
    setActiveBrand('all');
    setActiveSize([]);
    setActiveColors([]); // Сбрасываем выбранные цвета при смене страниц
  }, [catalogType]);

  // Динамический расчет цен для ползунков
  useEffect(() => {
    const currentType = catalogType || 'clothing';
    const activeProducts = productsData.filter(p => p.type === currentType);

    if (activeProducts.length > 0) {
      const prices = activeProducts.map(p => 
        parseInt(p.price.toString().replace(/[^0-9]/g, ''), 10) || 0
      );
      const min = Math.min(...prices);
      const max = Math.max(...prices);

      setMinPrice(min);
      maxPrice !== max && setMaxPrice(max);
      setCurrentMin(min);
      setCurrentMax(max);
    }
  }, [catalogType]);

  const filteredProducts = productsData.filter((product) => {
    const pDescription = product.description.toLowerCase();
    const pBrand = product.brand.toLowerCase();
    const query = searchQuery.toLowerCase();

    const isSearching = searchQuery.trim() !== '';
    const currentType = catalogType || 'clothing';
    
    const matchesType = isSearching ? true : product.type === currentType;
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesBrand = activeBrand === 'all' || pBrand.includes(activeBrand.toLowerCase());
    const matchesSearch = query === '' || pDescription.includes(query) || pBrand.includes(query);

    const matchesSize = activeSize.length === 0 || (product.sizes && product.sizes.some(size => {
        return activeSize.includes(size.toString());
    }));

    // ПРОВЕРКА ЦВЕТА: Если массив activeColors пустой — пропускаем всё.
    // Иначе проверяем, совпадает ли цвет товара (product.color) с каким-либо выбранным ID цвета в фильтре
    const matchesColor = activeColors.length === 0 || 
      (product.color && activeColors.includes(product.color.toLowerCase().trim()));

    // Проверка диапазона цен слайдера
    const pureProductPrice = parseInt(product.price.toString().replace(/[^0-9]/g, ''), 10) || 0;
    const matchesPrice = pureProductPrice >= currentMin && pureProductPrice <= currentMax;

    return matchesType && matchesCategory && matchesBrand && matchesSearch && matchesSize && matchesColor && matchesPrice;
  });

  return (
    <section className="section-product container">
      <div className="product">
        <Filter
          activeBrand={activeBrand}
          setActiveBrand={setActiveBrand}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          activeSize={activeSize}
          setActiveSize={setActiveSize}
          activeColors={activeColors}     // ПРОКИДЫВАЕМ ЦВЕТА СТЕЙТ
          setActiveColors={setActiveColors} // ПРОКИДЫВАЕМ ЦВЕТА ФУНКЦИЮ
          minPrice={minPrice}
          maxPrice={maxPrice}
          currentMin={currentMin}
          setCurrentMin={setCurrentMin}
          currentMax={currentMax}
          setCurrentMax={setCurrentMax}
          catalogType={catalogType}
        />
        <ul className="product-list">
          {filteredProducts.length === 0 ? (
            <div className="product-empty">
              <h3 className="product-empty__title">Товаров не найдено</h3>
              <p className="product-empty__text">Попробуйте выбрать другую категорию или бренд</p>
            </div>
          ) : (
            filteredProducts.map((product) => (
              <Card 
                key={product.id} 
                product={product} 
                favorites={favorites}          
                toggleFavorite={toggleFavorite} 
              />
            ))
          )}
        </ul>
      </div>
    </section>
  );
};

export default Product;
