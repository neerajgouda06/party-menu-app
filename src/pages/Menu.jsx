import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useSavedRecipes } from '../context/SavedRecipesContext';
import { filterMenuItems } from '../data/menuData';
import FilterBar from '../components/FilterBar';
import FoodCard from '../components/FoodCard';

const Menu = () => {
  const { user, logout } = useAuth();
  const { savedRecipes } = useSavedRecipes();
  const navigate = useNavigate();

  const [filters, setFilters] = useState({
    category: 'all',
    diet: 'all',
    name: ''
  });

  const filteredDishes = filterMenuItems(filters);

  return (
    <div className="page-container">
      <header className="menu-header">
        <div className="header-left">
          <span className="welcome-msg">Welcome back, {user?.name || 'Guest'}</span>
          <h1>Party Menu.</h1>
        </div>
        <div className="header-right">
          <Link to="/saved-recipes" className="saved-recipes-link">
            Saved Collection
            {savedRecipes.length > 0 && (
              <span className="badge">{savedRecipes.length}</span>
            )}
          </Link>
          <button onClick={() => logout()} className="logout-btn">Sign Out</button>
        </div>
      </header>

      <main className="menu-content">
        <FilterBar filters={filters} setFilters={setFilters} />
        
        <div className="results-info">
          {filteredDishes.length} curated {filteredDishes.length === 1 ? 'item' : 'items'}
        </div>

        {filteredDishes.length > 0 ? (
          <div className="menu-grid">
            {filteredDishes.map(dish => (
              <FoodCard key={dish.id} item={dish} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-icon">🍽</div>
            <h2>No items match your criteria.</h2>
            <p>Adjust your filters to explore our full selection.</p>
            <button className="primary-btn mt-4" onClick={() => setFilters({category: 'all', diet: 'all', name: ''})}>
              Reset Filters
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Menu;
