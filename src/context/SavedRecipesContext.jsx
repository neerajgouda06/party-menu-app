import React, { createContext, useContext, useState, useEffect } from 'react';

const SavedRecipesContext = createContext();

export const useSavedRecipes = () => useContext(SavedRecipesContext);

export const SavedRecipesProvider = ({ children }) => {
  const [savedRecipes, setSavedRecipes] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('party_menu_saved_recipes');
    if (stored) {
      setSavedRecipes(JSON.parse(stored));
    }
  }, []);

  const saveRecipe = (recipe) => {
    setSavedRecipes(prev => {
      const updated = [...prev, recipe];
      localStorage.setItem('party_menu_saved_recipes', JSON.stringify(updated));
      return updated;
    });
  };

  const removeRecipe = (id) => {
    setSavedRecipes(prev => {
      const updated = prev.filter(recipe => recipe.id !== parseInt(id));
      localStorage.setItem('party_menu_saved_recipes', JSON.stringify(updated));
      return updated;
    });
  };

  const isSaved = (id) => {
    return savedRecipes.some(recipe => recipe.id === parseInt(id));
  };

  return (
    <SavedRecipesContext.Provider value={{ savedRecipes, saveRecipe, removeRecipe, isSaved }}>
      {children}
    </SavedRecipesContext.Provider>
  );
};
