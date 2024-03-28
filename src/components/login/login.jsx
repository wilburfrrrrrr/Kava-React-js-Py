import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../api/login/apiLogin';

export default function Login() {
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [error, setError] = React.useState(null);

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	}

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	}

	const handleLogin = async (event) => {
		event.preventDefault();
		try {
			const response = await login({ email, password });
			console.log(response);
		}
		catch(error){
			setError(error);
		}
	}

	return (
	<div className='container'> 
		<h1>Kava</h1>
		<h2>Inicio de sesión</h2>
		<form onSubmit={handleLogin} className='form'>
			<div className='form-group'>
			<label>
			Email:
			<input type="email" value={email} onChange={handleEmailChange} className='form-control'/>
			</label>
			</div>
			<div className='form-group'>
			<label>
			Contraseña:
			<input type="password" value={password} onChange={handlePasswordChange} className='form-control'/>
			</label>
			</div>
			<div className='form-group'>
			{error && <div style={{ color: 'red' }}>{error}</div>}		
			<button type="submit" className='form-submit'>Iniciar sesión</button>
			</div>
			</form>
		<br />
		<Link to="/register">Registrarse</Link>	
		<br />	
		<Link to="/home">Home</Link>
	</div>
  );
}