import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import './userInfo.css';
import { getUser } from "../../api/user/apiUser";
import { getAgendaByUser } from "../../api/agenda/apiAgenda";

export default function UserInfo() {
	const [user, setUser] = React.useState(null);
	const [agenda, setAgenda] = React.useState([]);

	useEffect(() => {
		console.log("entering the user info");
		getUser()
			.then((response) => {
				console.log(response);
				setUser(response);
			})
			.catch((error) => {
				console.log(error);
			});

		getAgendaByUser()
			.then((response) => {
				console.log(response);
				setAgenda((agenda) => [...agenda, response]);
			})
			.catch((error) => {
				console.log(error);
			});
	}
	, []);

	if (!user) {
		return <div>Cargando...</div>;
	}

	const getMembership = (membership) => {
		if (membership === 1) {
			return "Esencial";
		}
		if (membership === 2) {
			return "Premium";
		}
		if (membership === 3) {
			return "VIP";
		}
	}

	return (
		<div className="general">
			<header>
				<h1 className="title">Kava</h1>
				<button>
					<Link to="/" className="link">Home</Link>
				</button>

			</header>
			<div className="container">
				<h1 className="title">Kava</h1>
				<h2 className="subtitle">Información del usuario</h2>
				<div className="field"> 
					<span className="info-label">Nombre: </span>
					<span className="info-value">{user.name}</span>
				</div>
				<div className="field">
					<span className="info-label">Apellido: </span>
					<span className="info-value">{user.last_name}</span>
				</div>  
					<span className="info-label">Membresía: </span>
					<span className="info-value">{getMembership(user.memberships)}</span>
				<div className="field">
					<span className="info-label">Email: </span>
					<span className="info-value">{user.email}</span>
				</div>
				<h2>Tus citas en Kava</h2>
			<table className="agenda-table">
				<thead>
				<tr>
					<th>Fecha//Hora</th>
					<th>Servicio</th>
				</tr>
				</thead>
				<tbody>
				{agenda && agenda.map((item) => (
					<tr key={item.id}>
					<td>{item.date}</td>
					<td>{item.service_id}</td>
					</tr>
				))}
				</tbody>
			</table>
				<Link to="/user_info/agenda">Reservar Cita</Link>
			</div>
			
		</div>
	
  );
}