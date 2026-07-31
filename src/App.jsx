import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { SavedRecipesProvider } from './context/SavedRecipesContext';
import ProtectedRoute from './components/ProtectedRoute';

import SignIn from './pages/SignIn';
import Menu from './pages/Menu';
import FoodDetail from './pages/FoodDetail';
import SavedRecipes from './pages/SavedRecipes';
import NotFound from './pages/NotFound';

function App() {
  return (
    <AuthProvider>
      <SavedRecipesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route 
              path="/" 
              element={
                <ProtectedRoute>
                  <Menu />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/menu/:id" 
              element={
                <ProtectedRoute>
                  <FoodDetail />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/saved-recipes" 
              element={
                <ProtectedRoute>
                  <SavedRecipes />
                </ProtectedRoute>
              } 
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </SavedRecipesProvider>
    </AuthProvider>
  );
}

export default App;
