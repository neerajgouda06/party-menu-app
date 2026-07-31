# Party Menu Application

A responsive, web-based food discovery app that allows users to browse, filter, and save dishes from a curated party menu.

## Features
- **User Authentication**: Secure login flow using a mock remote API.
- **Protected Routes**: Core application features are locked behind an authentication wall.
- **Dynamic Filtering**: Instantly filter 50 unique dishes by category (Starter, Main, Sides, Desert) or dietary preference (Veg / Non-Veg).
- **Search Functionality**: Case-insensitive text search.
- **Saved Recipes**: Persist your favorite recipes across sessions using browser local storage.
- **Modern UI**: High-end editorial design featuring a responsive CSS grid, glassmorphic elements, and micro-animations.

## Technology Stack
- **Framework**: React 19 + Vite 6
- **Routing**: React Router DOM v7
- **State Management**: Context API (AuthContext, SavedRecipesContext)
- **Styling**: Pure CSS (No UI frameworks used)

## Setup Instructions

1. **Install Dependencies**
   Run the following command to install the required Node modules:
   ```bash
   npm install
   ```

2. **Start the Development Server**
   ```bash
   npm run dev
   ```

3. **Login Credentials**
   - **Email:** `admin@example.com`
   - **Password:** `admin123`

## Deployment
This project is configured for seamless deployment on platforms like Vercel and Netlify. 
- A `vercel.json` and a `public/_redirects` file are included to handle client-side routing fallback so that refreshing on internal pages (like `/saved-recipes`) works perfectly in production without throwing 404 errors.
