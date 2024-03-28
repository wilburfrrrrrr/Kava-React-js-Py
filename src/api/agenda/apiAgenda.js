import { apiClient } from '../client/apiClient';

export async function getAgenda(){
	try{
		return await apiClient('agenda');
	}catch(error){
		return Promise.reject(error);
	}
}

export async function createAgenda({ user_id, date, is_done, service_id }){
	try{
		return await apiClient('agenda', {
			method: 'POST',
			body: { user_id, date, is_done, service_id },
		});
	}catch(error){
		return Promise.reject(error);
	}
}

export async function deleteAgenda({ id }){
	try{
		return await apiClient('agenda', {
			method: 'DELETE',
			body: { id },
		});
	}catch(error){
		return Promise.reject(error);
	}
}

export async function updateAgenda({ id, user_id, date, is_done, service_id }){
	try{
		return await apiClient('agenda', {
			method: 'PUT',
			body: { id, user_id, date, is_done, service_id },
		});
	}catch(error){
		return Promise.reject(error);
	}
}

export async function getAgendaByUser({ user_id }){
	try{
		return await apiClient('agenda', {
			method: 'POST',
			body: { user_id },
		});
	}catch(error){
		return Promise.reject(error);
	}
}

export async function getAgendaByDate({ date }){
	try{
		return await apiClient('agenda', {
			method: 'POST',
			body: { date },
		});
	} catch(error){
		return Promise.reject(error);
	}	
}

