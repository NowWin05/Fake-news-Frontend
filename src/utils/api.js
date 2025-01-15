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
export const analyzeNews = async (data) => {
  try {
    const response = await api.post('/analyze', data);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Error analyzing news');
  }
};

export default api;
