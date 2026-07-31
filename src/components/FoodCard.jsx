import React from 'react';
import { useNavigate } from 'react-router-dom';

const FoodCard = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div className="food-card" onClick={() => navigate(`/menu/${item.id}`)}>
      <div className="card-image-container">
        <img src={item.image} alt={item.name} className="card-image" />
        <div className={`diet-badge ${item.isVeg ? 'veg' : 'non-veg'}`}>
          <span className="dot"></span>
          {item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
        </div>
      </div>
      <div className="card-content">
        <div className="card-header">
          <span className="category-label">{item.category}</span>
        </div>
        <h3 className="dish-name">{item.name}</h3>
        <p className="dish-description">{item.description}</p>
        <p className="servings">Serves / {item.servings}</p>
      </div>
    </div>
  );
};

export default FoodCard;
