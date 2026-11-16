import { BaseUrl } from "../config";

/**
 * Register a new student user
 * @param {Object} userData - Form data matching backend registration schema
 * @returns {Promise<Object>} - Server response object with user info and token
 */
export const registerUser = async (userData) => {
  const response = await fetch(`${BaseUrl}/api/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Registration failed. Please check your details.");
  }

  return data;
};

/**
 * Login an existing student user
 * @param {Object} credentials - Object containing collegeEmail and password
 * @returns {Promise<Object>} - Server response object with safe user info and token
 */
export const loginUser = async (credentials) => {
  const response = await fetch(`${BaseUrl}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Invalid credentials. Please try again.");
  }

  return data;
};

/**
 * Optional server health check
 */
export const testing = async () => {
  const response = await fetch(`${BaseUrl}/`);
  if (!response.ok) throw new Error(`Server responded with ${response.status}`);
  return response.json();
};
