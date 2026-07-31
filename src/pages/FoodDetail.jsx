import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getMenuItemById } from '../data/menuData';
import { useSavedRecipes } from '../context/SavedRecipesContext';

const FoodDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { saveRecipe, removeRecipe, isSaved, savedRecipes } = useSavedRecipes();
  
  const dish = getMenuItemById(id);
  
  if (!dish) {
    return (
      <div className="page-container not-found-container">
        <h2>Item not found</h2>
        <button className="primary-btn mt-4" onClick={() => navigate('/')}>Return to Menu</button>
      </div>
    );
  }

  const saved = isSaved(dish.id);

  const handleSaveToggle = () => {
    if (saved) {
      removeRecipe(dish.id);
    } else {
      saveRecipe(dish);
    }
  };

  return (
    <div className="page-container">
      <header className="menu-header compact">
        <button onClick={() => navigate(-1)} className="back-btn">Back to Menu</button>
        <div className="header-right">
          <Link to="/saved-recipes" className="saved-recipes-link">
            Saved Collection
            {savedRecipes.length > 0 && <span className="badge">{savedRecipes.length}</span>}
          </Link>
        </div>
      </header>

      <main className="detail-content">
        <div className="detail-hero">
          <img src={dish.image} alt={dish.name} className="detail-image" />
          <div className="detail-badges">
            <span className="category-label">{dish.category}</span>
            <div className={`diet-badge ${dish.isVeg ? 'veg' : 'non-veg'}`} style={{position: 'static', display: 'inline-flex', alignSelf: 'center'}}>
              <span className="dot"></span>
              {dish.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
            </div>
          </div>
        </div>

        <div className="detail-body">
          <div className="detail-header-info">
            <h1 className="detail-title">{dish.name}</h1>
          </div>
          
          <p className="detail-servings">Serves {dish.servings.replace('For ', '')}</p>
          <p className="detail-description">{dish.fullDescription || dish.description}</p>
          
          <div className="ingredients-section">
            <h2>The Ingredients</h2>
            <ul className="ingredients-list">
              {dish.ingredients?.map((ing, idx) => (
                <li key={idx}>
                  <span className="ing-name">{ing.name}</span>
                  <span className="ing-qty">{ing.quantity}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div style={{ marginTop: '4rem' }}>
            <button 
              className={`save-btn ${saved ? 'saved' : ''}`}
              onClick={handleSaveToggle}
            >
              {saved ? 'Remove from Collection' : 'Add to Collection'}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FoodDetail;
