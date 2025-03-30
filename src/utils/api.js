/**
 * API Utility Module
 * Handles all API calls to the backend server
 * Includes error handling and response formatting
 */

import axios from 'axios';

// API base URL from environment variables
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

// Axios instance with default configuration
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Analyzes news content using various methods
 * @param {Object} data - The news data to analyze
 * @returns {Promise<Object>} Analysis results
 */
// export const analyzeNews = async (data) => {
//   try {
//     console.log("Sending data to API:", data); // Debugging
//     const response = await fetch("http://localhost:5000/api/analyze", { // ✅ Correct endpoint
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data),
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const result = await response.json();
//     console.log("API Response Received:", result); // ✅ Check API output
//     return result;
//   } catch (error) {
//     console.error("Error in API call:", error);
//     return null;
//   }
// };


export const analyzeNews = async (data) => {
  try {
    const response = await api.post('/analyze', data);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Error analyzing news');
  }
};

export default api;
