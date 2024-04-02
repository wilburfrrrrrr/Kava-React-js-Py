import { apiClient } from "../client/apiClient";
import { jwtDecode } from 'jwt-decode';

// const TOKEN_DECODER_KEY = process.env.REACT_APP_TOKEN_DECODE_KEY;

export async function getUsers() {
	try{
		return await apiClient("users/");
	}catch(error){
		return Promise.reject(error);
	}
}

export async function getUser() {
	try{
		console.log("getting the token");
		const token = localStorage.getItem('token');
		const decodedToken = jwtDecode(token);
		console.log(decodedToken);
		const email = decodedToken.email;
		console.log(email);
		return await apiClient(`users/mail/${email}`);
	}catch(error){
		return Promise.reject(error);
	}
}

export async function createUser({ name, last_name, email, password, memberships }) {
	try{
		console.log(name, last_name, email, password, memberships);
		return await apiClient("users/", {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: { name, last_name, email, password, memberships },
		});
	} catch (error) {
		return Promise.reject(error);
	}
}

export async function deleteUser({ id }) {
	try{
		return await apiClient(`users/${id}`, {
			method: 'DELETE',
		});
	} catch (error) {
		return Promise.reject(error);
	}
}

export async function updateUser({ id, email , password, memberships}) {
	try{
		return await apiClient(`users/${id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: { email, password, memberships },
		});
	} catch (error) {
		return Promise.reject(error);
	}
}