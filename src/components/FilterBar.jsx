import React from 'react';

const FilterBar = ({ filters, setFilters }) => {
  const categories = ['all', 'starter', 'main', 'sides', 'desert'];
  const diets = ['all', 'veg', 'nonveg'];

  return (
    <div className="filter-bar">
      <div className="filter-group">
        <span className="filter-label">Category</span>
        <div className="chips-container">
          {categories.map(cat => (
            <button 
              key={cat} 
              className={`chip ${filters.category === cat ? 'active' : ''}`}
              onClick={() => setFilters({ ...filters, category: cat })}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-group">
        <span className="filter-label">Dietary</span>
        <div className="chips-container">
          {diets.map(diet => (
            <button 
              key={diet} 
              className={`chip ${filters.diet === diet ? 'active' : ''}`}
              onClick={() => setFilters({ ...filters, diet })}
            >
              {diet === 'nonveg' ? 'Non-Veg' : diet.charAt(0).toUpperCase() + diet.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-group search-group">
        <span className="filter-label">Search</span>
        <input 
          type="text" 
          placeholder="Search dishes by name..." 
          className="search-input"
          value={filters.name}
          onChange={(e) => setFilters({ ...filters, name: e.target.value })}
        />
      </div>
    </div>
  );
};

export default FilterBar;
