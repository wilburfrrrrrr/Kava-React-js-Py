import React from "react";
import "./register.css";
import { Link } from "react-router-dom";
import { createUser } from "../../api/user/apiUser";

export default function Register() {
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [passwordConfirmation, setPasswordConfirmation] = React.useState('');
	const [name, setName] = React.useState('');
	const [lastName, setLastName] = React.useState('');
	const [membership, setMembership] = React.useState('');
	const [error, setError] = React.useState(null);

	const handleEmailChange = (event) => {
		return (
			setEmail(event.target.value)
		);
	}

	const handlePasswordChange = (event) => {
		return (
			setPassword(event.target.value)
		);
	}

	const handlePasswordConfirmationChange = (event) => {
		return (
			setPasswordConfirmation(event.target.value)
		);
	}

	const handleNameChange = (event) => {
		return (
			setName(event.target.value)
		);
	}

	const handleLastNameChange = (event) => {
		return (
			setLastName(event.target.value)
		);
	}

	const handleMembershipChange = (event) => {
		return (
			setMembership(event.target.value)
		);
	}

	const handleRegister = (event) => {
		console.log("entering");
		event.preventDefault();
		try {
			console.log("check before creating");
			if (password !== passwordConfirmation) {
				throw new Error("Las contraseñas no coinciden");
			}
			const response = createUser({ email, password, name, lastName, membership });
			console.log(response);
		} catch (error) {
			console.log("wtf");
			setError(error);	
		}
		
	}

	return (
	<div className="container">
		<header></header>
	  <h1>Kava</h1>
	  <h2>Registro</h2>
	  <form onSubmit={handleRegister} className="form">
	  	<div className="form-group">
		<label>
		  Nombre:
		  <input type="text" value={name} onChange={handleNameChange} className="form-control" />
		</label>
		</div>
		<div className="form-group">
		<label>
		  Apellido:
		  <input type="text" value={lastName} onChange={handleLastNameChange} className="form-control"/>
		</label>
		</div>
		<div className="form-group">
		<label>
		  Email:
		  <input type="email" value={email} onChange={handleEmailChange} className="form-control"/>
		</label>
		</div>
		<div className="form-group">
		<label>
		  Contraseña:
		  <input type="password" value={password} onChange={handlePasswordChange} className="form-control"/>
		</label>
		</div>
		<div className="form-group">
		<label>
		  Confirmar contraseña:
		  <input type="password" value={passwordConfirmation} onChange={handlePasswordConfirmationChange} className="form-control"/>
		</label>
		</div>
		<div className="form-group">
		<label>
		  Membresía:
		  {/* <input type="text" value={membership} onChange={handleMembershipChange} className="form-control"/> */}
		<select value={membership} onChange={handleMembershipChange} className="form-control">
			<option value="">Seleccione una membresía</option>		  	
			<option value="1">Esencial</option>
		  	<option value="2">Premium</option>
			<option value="3">VIP</option>
		</select>
		</label>

		</div>
		<div className="form-group">
		{error && <div style={{ color: 'red' }}>{error}</div>}
		<button type="submit" className="form-submit">Registrarse</button>
		</div>
		</form>
	  <Link to="/home">Home</Link>
	</div>
  );
}