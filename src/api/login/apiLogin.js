import { apiClient } from "../client/apiClient";

export async function login({ email, password }) {
  try{
    return await apiClient("login", {
      method: 'POST',
      body: { email, password },
    });
  } catch (error) {
    return Promise.reject(error);
  }
}