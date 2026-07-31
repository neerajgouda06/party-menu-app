import React from 'react';
import { useNavigate } from 'react-router-dom';

const SavedRecipeCard = ({ item, onRemove }) => {
  const navigate = useNavigate();

  const handleRemove = (e) => {
    e.stopPropagation();
    onRemove(item.id);
  };

  return (
    <div className="food-card saved-card" onClick={() => navigate(`/menu/${item.id}`)}>
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
        <div className="saved-card-footer">
          <p className="servings">Serves / {item.servings}</p>
          <button className="remove-btn" onClick={handleRemove}>Remove</button>
        </div>
      </div>
    </div>
  );
};

export default SavedRecipeCard;
