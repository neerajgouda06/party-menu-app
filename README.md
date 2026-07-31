# Party Menu Application

A modern, responsive food discovery web app built as a front-end assessment using **React 19, React Router DOM 7, and Vite 6**.

## Features

- **Authentication:** Mock login via a serverless API endpoint.
- **Menu Browsing:** Browse a catalog of 50 handcrafted dish entries spanning Starters, Mains, Sides, and Desserts.
- **Dynamic Filtering:** Instantly filter dishes by Category, Diet (Veg/Non-Veg), or search by name.
- **Dish Details:** View high-quality images, descriptions, serving sizes, and full ingredient lists.
- **Saved Recipes:** Save your favourite dishes to a persistent "Saved Recipes" list using LocalStorage.
- **Responsive Design:** Premium, glassmorphism-inspired UI that works perfectly on desktop and mobile.

## Tech Stack

- **React 19**
- **React Router DOM 7**
- **Vite 6**
- **Plain CSS** (No external UI frameworks)

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm

### Installation & Running Locally

1. Clone or extract the project.
2. Navigate into the project directory:
   ```bash
   cd party-menu-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser to the URL provided by Vite (usually `http://localhost:5173`).

### Test Credentials
To access the application, use the following credentials on the Sign In page:
- **Email:** `admin@example.com`
- **Password:** `admin123`

## Project Architecture

- **`src/context/`**: Contains React Context providers for global state (`AuthContext` and `SavedRecipesContext`).
- **`src/data/`**: Contains the local JSON data (`menuData.js`) and filtering/lookup logic.
- **`src/components/`**: Reusable UI components like cards and filter bars, plus route protection (`ProtectedRoute`).
- **`src/pages/`**: Main route views (`SignIn`, `Menu`, `FoodDetail`, `SavedRecipes`, `NotFound`).
- **`src/index.css`**: Global design system incorporating CSS variables for a cohesive theme.

## Deployment

This app is ready for deployment on **Vercel** or **Netlify**.
1. Push the code to a GitHub repository.
2. Import the repository into your chosen hosting platform.
3. The build settings should auto-detect:
   - **Framework:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`

*No environment variables (.env) are strictly required to run this app, as the authentication API is public and the menu data is static.*
