import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getMenuItemById } from '../data/menuData';
import { useSavedRecipes } from '../context/SavedRecipesContext';

const FoodDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { savedRecipes, addRecipe, removeRecipe } = useSavedRecipes();
  
  const dish = getMenuItemById(id);
  const isSaved = savedRecipes.some(r => r.id === dish?.id);

  if (!dish) {
    return (
      <div className="page-container empty-state">
        <h2>Dish not found</h2>
        <button className="primary-btn" onClick={() => navigate('/')} style={{marginTop: '1rem'}}>
          Back to Menu
        </button>
      </div>
    );
  }

  const toggleSave = () => {
    if (isSaved) {
      removeRecipe(dish.id);
    } else {
      addRecipe(dish);
    }
  };

  return (
    <div className="detail-page">
      <button className="back-btn logout-btn" onClick={() => navigate('/')}>
        &larr; Back to Menu
      </button>

      <div className="detail-card">
        <div className="detail-image-container">
          <img src={dish.image} alt={dish.name} className="detail-image" />
        </div>
        
        <div className="detail-content">
          <div className="detail-header">
            <div>
              <div className="detail-badges" style={{marginBottom: '1rem'}}>
                <span className="detail-badge-pill category">{dish.category}</span>
                <span className={`detail-badge-pill ${dish.isVeg ? 'veg' : 'non-veg'}`}>
                  {dish.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                </span>
              </div>
              <h1 className="detail-title">{dish.name}</h1>
              <p className="servings">{dish.servings}</p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <Link to="/saved-recipes" style={{fontWeight: 'bold'}}>View Collection</Link>
              <button 
                className={`save-action-btn ${isSaved ? 'saved' : ''}`}
                onClick={toggleSave}
              >
                {isSaved ? 'Saved' : 'Save Recipe'}
              </button>
            </div>
          </div>

          <div className="detail-section">
            <h3>Description</h3>
            <p style={{lineHeight: '1.6', color: 'var(--text-secondary)'}}>{dish.fullDescription}</p>
          </div>

          <div className="detail-section">
            <h3>Ingredients</h3>
            <ul className="ingredients-list">
              {dish.ingredients.map((ing, idx) => (
                <li key={idx}>
                  <span>{ing.name}</span>
                  <span>{ing.quantity}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetail;
