import React from "react";
import { Link } from "react-router-dom";
import './userInfo.css';

export default function UserInfo() {
	const user = {
		name: '',
		lastName: '',
		membership: '',
		email: ''
	};
  return (
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
			<span className="info-value">{user.subtitle}</span>
		<div className="field">
			<span className="info-label">Email: </span>
			<span className="info-value">{user.email}</span>
		</div>
		<Link to="/agenda">Reservar Cita</Link>
		<br />
		<Link to="/home">Home</Link>
	</div>
  );
}