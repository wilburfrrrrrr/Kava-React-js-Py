import React from "react";
import "./register.css";
import { Link } from "react-router-dom";
import { createUser } from "../../api/user/apiUser";
import { useNavigate } from "react-router-dom";

export default function Register() {
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [passwordConfirmation, setPasswordConfirmation] = React.useState('');
	const [name, setName] = React.useState('');
	const [lastName, setLastName] = React.useState('');
	const [membership, setMembership] = React.useState('');
	const [error, setError] = React.useState(null);
	const navigate = useNavigate();


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
			let user_membership = parseInt(membership);
			if (password !== passwordConfirmation) {
				throw new Error("Las contraseñas no coinciden");
			}
			const response = createUser({ name, last_name: lastName, email, password, memberships: user_membership});
			console.log(response);
			navigate('/login');

		} catch (error) {
			console.log(error);
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
		  <input type="text" value={name} onChange={handleNameChange} className="form-control" required minLength={4} maxLength={100}/>
		</label>
		</div>
		<div className="form-group">
		<label>
		  Apellido:
		  <input type="text" value={lastName} onChange={handleLastNameChange} className="form-control" required minLength={4} maxLength={100}/>
		</label>
		</div>
		<div className="form-group">
		<label>
		  Email:
		  <input type="email" value={email} onChange={handleEmailChange} className="form-control" required/>
		</label>
		</div>
		<div className="form-group">
		<label>
		  Contraseña:
		  <input type="password" value={password} onChange={handlePasswordChange} className="form-control" required minLength={8} maxLength={20}/>
		</label>
		</div>
		<div className="form-group">
		<label>
		  Confirmar contraseña:
		  <input type="password" value={passwordConfirmation} onChange={handlePasswordConfirmationChange} className="form-control" required minLength={8} maxLength={20}/>
		</label>
		</div>
		<div className="form-group">
		<label>
		  Membresía:
		  {/* <input type="text" value={membership} onChange={handleMembershipChange} className="form-control"/> */}
		<select value={membership} onChange={handleMembershipChange} className="form-control" required>
			<option value="">Seleccione una membresía</option>		  	
			<option value="1">Esencial</option>
		  	<option value="2">Premium</option>
			<option value="3">VIP</option>
		</select>
		</label>

		</div>
		<div className="form-group">
		{error && <div style={{ color: 'red' }}>{error.message}</div>}
		<button type="submit" className="form-submit">Registrarse</button>
		</div>
		</form>
	  <Link to="/">Home</Link>
	</div>
  );
}