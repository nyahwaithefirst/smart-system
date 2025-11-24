// api.js
import axios from "axios";

// ===============================
// 🔐 BASIC AUTH CONFIG
// Change these to your credentials
// ===============================
const USERNAME = "lodza";
const PASSWORD = "@Password123";

// Encode credentials as Base64
const basicAuthToken = `Basic ${btoa(`${USERNAME}:${PASSWORD}`)}`;

// ===============================
// 🌐 Axios Client
// ===============================
const apiClient = axios.create({
  baseURL: "https://api.yourapp.com", // change to your backend URL
  withCredentials: true, // keep if your server uses cookies
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
    Authorization: basicAuthToken, // <- 🔐 BASIC AUTH HEADER
  },
});

// ===============================
// 📡 Generic request handler
// ===============================
const apiRequest = async (method, url, data = null) => {
  try {
    const response = await apiClient.request({
      method,
      url,
      data,
    });

    return response.data;
  } catch (error) {
    if (error.response) {
      const { status, data } = error.response;
      throw new Error(`HTTP error ${status}: ${JSON.stringify(data)}`);
    } else if (error.request) {
      throw new Error("No response from server");
    } else {
      throw new Error(error.message);
    }
  }
};

// ===============================
// 🚀 Convenience Wrappers
// ===============================
export const getApi = (url) => apiRequest("GET", url);
export const postApi = (url, data) => apiRequest("POST", url, data);
export const putApi = (url, data) => apiRequest("PUT", url, data);
export const deleteApi = (url) => apiRequest("DELETE", url);
