// Importing the React library to create components and manage the UI structure.
import React from 'react';

// Importing the ReactDOM library, specifically its modern root rendering method `createRoot`.
import ReactDOM from 'react-dom/client';

// Importing the CSS file for global styling of the application.
import './index.css';

// Importing the main application component, `App`, which serves as the root component of the app.
import App from './App';

// Importing the `reportWebVitals` function to measure and log web performance metrics.
import reportWebVitals from './reportWebVitals';

// Creating the root of the React application and attaching it to the HTML element with the ID of 'root'.
// This `root` acts as the entry point for rendering React components into the DOM.
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the `App` component within a React StrictMode wrapper.
// React.StrictMode is a development tool that helps detect potential issues in the application, such as deprecated APIs or side effects.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: Calling the `reportWebVitals` function to start measuring performance metrics for the application.
// This function can log the metrics (e.g., to the console) or send them to an analytics endpoint for further analysis.
// Example usage: `reportWebVitals(console.log)` logs metrics to the console.
// To learn more about web vitals: https://bit.ly/CRA-vitals
reportWebVitals();
