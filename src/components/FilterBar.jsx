import React from 'react';

const FilterBar = ({ filters, setFilters }) => {
  const categories = ['all', 'starter', 'main', 'sides', 'desert'];
  const diets = ['all', 'veg', 'nonveg'];

  const handleSearch = (e) => {
    e.preventDefault();
  };

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
          {diets.map(diet => {
            let extraClass = '';
            if (diet === 'veg') extraClass = 'chip-veg';
            if (diet === 'nonveg') extraClass = 'chip-nonveg';
            
            return (
              <button 
                key={diet} 
                className={`chip ${filters.diet === diet ? 'active' : ''} ${extraClass}`}
                onClick={() => setFilters({ ...filters, diet })}
              >
                {diet === 'nonveg' ? 'Non-Veg' : diet.charAt(0).toUpperCase() + diet.slice(1)}
              </button>
            )
          })}
        </div>
      </div>

      <form className="search-group" onSubmit={handleSearch}>
        <input 
          type="text" 
          placeholder="Search menu..." 
          value={filters.name}
          onChange={(e) => setFilters({ ...filters, name: e.target.value })}
          className="search-input"
        />
        <button type="submit" className="search-btn">Search</button>
      </form>
    </div>
  );
};

export default FilterBar;
