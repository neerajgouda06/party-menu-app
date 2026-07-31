import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSavedRecipes } from '../context/SavedRecipesContext';
import SavedRecipeCard from '../components/SavedRecipeCard';

const SavedRecipes = () => {
  const { savedRecipes, removeRecipe } = useSavedRecipes();
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <header className="menu-header compact">
        <button onClick={() => navigate(-1)} className="back-btn">← Back</button>
      </header>

      <main className="saved-content">
        <div className="page-title-group">
          <h1>Saved Recipes</h1>
          <p className="subtitle">{savedRecipes.length} saved recipes</p>
        </div>

        {savedRecipes.length > 0 ? (
          <div className="menu-grid">
            {savedRecipes.map(dish => (
              <SavedRecipeCard 
                key={dish.id} 
                item={dish} 
                onRemove={removeRecipe} 
              />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-icon">📂</div>
            <h2>No saved recipes yet</h2>
            <p>You haven't saved any dishes yet.</p>
            <Link to="/" className="primary-btn">Browse the Menu</Link>
          </div>
        )}
      </main>
    </div>
  );
};

export default SavedRecipes;
