import { protectedApi } from '../protected/protectedApi';

export async function getAgenda(){
	try{
		return await protectedApi('agenda/');
	}catch(error){
		return Promise.reject(error);
	}
}

export async function createAgenda({ date, is_done, service_id }){
	try{
		console.log("creating agenda");
		return await protectedApi('agenda/', {
			method: 'POST',
			body: { date, is_done, service_id },
		});
	}catch(error){
		return Promise.reject(error);
	}
}

export async function deleteAgenda(){
	try{
		const token = localStorage.getItem('token');
		const user_id = token.id;
		return await protectedApi(`agenda/${user_id}`, {
			method: 'DELETE',
		});
	}catch(error){
		return Promise.reject(error);
	}
}

export async function updateAgenda({ date, is_done, service_id }){
	try{
		const token = localStorage.getItem('token');
		const user_id = token.id;
		return await protectedApi(`agenda/${user_id}`, {
			method: 'PUT',
			body: { date, is_done, service_id },
		});
	}catch(error){
		return Promise.reject(error);
	}
}

export async function getAgendaByUser(){
	try{
		console.log("getting all agendas by user");
		return await protectedApi(`agenda/user`, {
			method: 'GET',
		});
	}catch(error){
		return Promise.reject(error);
	}
}

// export async function getAgendaByDate({ date }){
// 	try{
// 		return await protectedApi('agenda', {
// 			method: 'POST',
// 			body: { date },
// 		});
// 	} catch(error){
// 		return Promise.reject(error);
// 	}	
// }

