import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './App.css';       // Imports your global styles

// This finds the 'root' div from your index.html and tells React to take control of it.
const root = ReactDOM.createRoot(document.getElementById('root'));

// This renders your main <App /> component inside the 'root' div.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);