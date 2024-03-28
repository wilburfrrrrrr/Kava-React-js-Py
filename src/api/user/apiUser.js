import { apiClient } from "../client/apiClient";

export async function getUsers() {
	try{
		return await apiClient("user");
	}catch(error){
		return Promise.reject(error);
	}
}

export async function createUser({ name, last_name, email, password, memberships }) {
	try{
		return await apiClient("user", {
			method: 'POST',
			body: { name, last_name, email, password, memberships },
		});
	} catch (error) {
		return Promise.reject(error);
	}
}

export async function deleteUser({ email }) {
	try{
		return await apiClient("user", {
			method: 'DELETE',
			body: { email },
		});
	} catch (error) {
		return Promise.reject(error);
	}
}

export async function updateUser({ email , password, memberships}) {
	try{
		return await apiClient("user", {
			method: 'PUT',
			body: { email, password, memberships },
		});
	} catch (error) {
		return Promise.reject(error);
	}
}