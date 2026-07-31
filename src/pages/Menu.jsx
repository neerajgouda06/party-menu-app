import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useSavedRecipes } from '../context/SavedRecipesContext';
import { filterMenuItems } from '../data/menuData';
import FilterBar from '../components/FilterBar';
import FoodCard from '../components/FoodCard';

const Menu = () => {
  const { user, logout } = useAuth();
  const { savedRecipes } = useSavedRecipes();
  
  const [filters, setFilters] = useState({
    category: 'all',
    diet: 'all',
    name: ''
  });

  const filteredItems = filterMenuItems(filters);

  return (
    <div className="page-container">
      <header className="page-header">
        <div className="header-left">
          <h1>Party Menu.</h1>
          <p>Welcome, {user?.name || 'Guest'}</p>
        </div>
        <div className="header-actions">
          <Link to="/saved-recipes" className="saved-link">
            Saved Recipes
            {savedRecipes.length > 0 && (
              <span className="badge">{savedRecipes.length}</span>
            )}
          </Link>
          <button onClick={logout} className="logout-btn">Logout</button>
        </div>
      </header>

      <FilterBar filters={filters} setFilters={setFilters} />

      <p className="results-meta">{filteredItems.length} items found</p>

      {filteredItems.length > 0 ? (
        <div className="menu-grid">
          {filteredItems.map(item => (
            <FoodCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h2>No dishes found.</h2>
          <p>Try different filters.</p>
        </div>
      )}
    </div>
  );
};

export default Menu;
