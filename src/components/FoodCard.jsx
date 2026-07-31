import React from 'react';
import { useNavigate } from 'react-router-dom';

const FoodCard = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div className="food-card" onClick={() => navigate(`/menu/${item.id}`)}>
      <div className="card-image-container">
        <img src={item.image} alt={item.name} className="card-image" />
        {/* Spec requirement: Diet badge top-right of image */}
        <div className={`diet-badge ${item.isVeg ? 'veg' : 'non-veg'}`}>
          {item.isVeg ? 'Veg' : 'Non-Veg'}
        </div>
      </div>
      <div className="card-content">
        <span className="category-label">{item.category}</span>
        <h3 className="card-title">{item.name}</h3>
        <p className="card-desc">{item.description}</p>
        <div className="card-footer">
          <span className="servings">{item.servings}</span>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
