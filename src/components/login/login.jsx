import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../api/login/apiLogin';
import { useNavigate } from 'react-router-dom';

export default function Login() {
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [error, setError] = React.useState(null);
	const navigate = useNavigate();

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
			localStorage.setItem('token', response.token);
			console.log(response);
			navigate('/user_info');
		}
		catch(error){
			setError(error);
			console.log(error);
		}
	}

	return (
	<div className='general'>
		<header>
			<h1 className='title'>Kava</h1>
			<button>
				<Link to="/register">Registrarse</Link>	
			</button>
			<button>
			<Link to="/">Home</Link>
			</button>
		</header>
		<div className='container'> 
			<h1>Kava</h1>
			<h2>Inicio de sesión</h2>
			<button>
				<Link to="/">Home</Link>
			</button>
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
				{error && <div style={{ color: 'red' }}>{error.message}</div>}		
				<button type="submit" className='form-submit'>Iniciar sesión</button>
				</div>
				</form>
		</div>
	</div>
	
  );
}