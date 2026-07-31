import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const NotFound = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="not-found-container">
      <div className="empty-icon">404</div>
      <h2>Page Not Found</h2>
      <p>The page you are looking for doesn't exist or has been moved.</p>
      
      <Link to={isAuthenticated ? '/' : '/signin'} className="primary-btn mt-4">
        {isAuthenticated ? 'Back to Menu' : 'Go to Sign In'}
      </Link>
    </div>
  );
};

export default NotFound;
