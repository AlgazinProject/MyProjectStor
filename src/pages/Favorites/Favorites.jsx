import React from 'react';
import Card from '../../components/Card/Card';
import { productsData } from '../../data';
import './Favorites.scss';

const Favorites = ({ favorites, toggleFavorite }) => {
  const favoriteProducts = productsData.filter(product => favorites.includes(product.id));

  return (
    <section className="favorites container">
      <h1 className="favorites__title">Избранное</h1>
      
      {favoriteProducts.length === 0 ? (
        <div className="favorites__empty">
          <p className="favorites__empty-text">В вашем списке избранного пока ничего нет</p>
        </div>
      ) : (
        <ul className="favorites__list">
          {favoriteProducts.map((product) => (
            <Card 
              key={product.id} 
              product={product} 
              favorites={favorites} 
              toggleFavorite={toggleFavorite} 
            />
          ))}
        </ul>
      )}
    </section>
  );
};

export default Favorites;
