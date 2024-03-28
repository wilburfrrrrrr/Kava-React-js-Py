import { apiClient } from "../client/apiClient";

export async function getUsers() {
	try{
		return await apiClient("users");
	}catch(error){
		return Promise.reject(error);
	}
}

export async function createUser({ name, last_name, email, password, memberships }) {
	try{
		return await apiClient("users", {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: { name, last_name, email, password, memberships },
		});
	} catch (error) {
		return Promise.reject(error);
	}
}

export async function deleteUser({ email }) {
	try{
		return await apiClient("users", {
			method: 'DELETE',
			body: { email },
		});
	} catch (error) {
		return Promise.reject(error);
	}
}

export async function updateUser({ email , password, memberships}) {
	try{
		return await apiClient("users", {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: { email, password, memberships },
		});
	} catch (error) {
		return Promise.reject(error);
	}
}