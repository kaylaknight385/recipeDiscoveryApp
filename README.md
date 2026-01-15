# Recipe Discovery App

A beautiful and interactive recipe discovery application built with React that helps users explore, search, and save their favorite recipes.

## Overview

This project is a single page application that allows users to browse recipe categories, view detailed recipe information, search for specific dishes, and maintain a personalized list of favorite recipes. The app uses TheMealDB API to fetch recipe data and implements modern React patterns including custom hooks, Context API, and local storage for data persistence.

## Features

### Browse Categories
Explore a wide variety of recipe categories with beautiful images and descriptions. Each category is clickable and leads to a collection of recipes within that category.

### Recipe Details
View comprehensive information about each recipe including ingredients with measurements, step by step cooking instructions, category and cuisine type, and links to video tutorials when available.

### Search Functionality
Search for recipes by name using the search bar in the navigation. Results are displayed instantly, making it easy to find exactly what you're looking for.

### Favorites System
Save your favorite recipes for quick access later. The favorites list persists across browser sessions using local storage, so your selections are never lost.

### Responsive Design
The application is fully responsive and works beautifully on desktop, tablet, and mobile devices.

## Technical Implementation

### Custom Hooks

**useFetch**
A reusable hook for handling API requests throughout the application. It manages data fetching, loading states, and error handling in one centralized location.

**useLocalStorage**
Synchronizes React state with browser local storage, allowing favorites to persist across sessions without requiring a backend database.

### State Management

The app uses the Context API to manage global state for the favorites system. The FavoritesContext provides functions to add, remove, and check favorite status for recipes across all components.

### Component Architecture

The application is organized into reusable components including RecipeCard for displaying recipe previews, CategoryCard for showing category information, Navbar for navigation and search, Spinner for loading indicators, and ErrorMessage for displaying errors gracefully.

### Routing

Client side routing is implemented using React state to navigate between the home page, category pages, recipe detail pages, favorites page, and search results page.

## Project Structure

```
src/
├── hooks/
│   ├── useFetch.js
│   └── useLocalStorage.js
├── context/
│   └── FavoritesContext.js
├── components/
│   ├── Spinner.js
│   ├── ErrorMessage.js
│   ├── RecipeCard.js
│   ├── CategoryCard.js
│   └── Navbar.js
├── pages/
│   ├── HomePage.js
│   ├── CategoryPage.js
│   ├── RecipeDetailPage.js
│   ├── FavoritesPage.js
│   └── SearchPage.js
├── App.js
└── index.js
```

## Getting Started

### Prerequisites
Node.js and npm installed on your computer

### Installation

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies with `npm install`
4. Start the development server with `npm start`
5. Open your browser to `http://localhost:3000`

## API

This application uses TheMealDB API, a free recipe database with detailed information about meals from around the world.

## Technologies Used

React for building the user interface
Tailwind CSS for styling and responsive design
Lucide React for beautiful icons
TheMealDB API for recipe data
Local Storage API for data persistence

## Future Enhancements

Potential improvements for future versions could include adding filters for dietary restrictions, implementing user accounts with cloud storage, creating shopping lists from recipe ingredients, adding recipe ratings and reviews, and integrating a meal planning calendar.

## Learning Outcomes

This project demonstrates proficiency in React hooks including useState and useEffect, custom hook creation and implementation, Context API for global state management, working with external APIs, local storage integration, component composition and reusability, and responsive web design principles.

## Acknowledgments

Recipe data provided by TheMealDB API. Built as a learning project to explore modern React development patterns and best practices.

## Author

Kayla Knight 
