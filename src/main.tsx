import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './style.css'; // Make sure styles are imported

// Render the React application
const rootElement = document.getElementById('app');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Root element #app not found");
}
