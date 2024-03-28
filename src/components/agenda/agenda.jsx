import React from "react";
import { Link } from "react-router-dom";
import { createAgenda } from "../../api/agenda/apiAgenda";

export default function Agenda() {
	const [date, setDate] = React.useState('');
	const [time, setTime] = React.useState('');
	const [service, setService] = React.useState('');
	const [error, setError] = React.useState(null);

	const handleDateChange = (event) => {
		setDate(event.target.value);
	}

	const handleTimeChange = (event) => {
		setTime(event.target.value);
	}


	const handleServiceChange = (event) => {
		setService(event.target.value);
	}

	const handleAgenda = async (event) => {
		event.preventDefault();
		try {
			const response = await createAgenda({ date: `${date}T{time}`, service });
			console.log(response);
		}
		catch(error){
			setError(error);
		}
	}

	return (
		<div className="container">
		<h1 className="title">Kava</h1>
		<h2 className="subtitle">Agenda</h2>
		<h3>Selecciona la fecha y hora de tu reserva</h3>
		<form className="form" onSubmit={handleAgenda}>
			<div className="field">
				<label>
					Fecha:
					<input type="date" value={date} onChange={handleDateChange} className="form-control"/>
				</label>
			</div>
			<div className="field">
				<label>
					Hora:
					<input type="time" value={time} onChange={handleTimeChange} className="form-control"/>
				</label>
			</div>
			<div className="field">
				<label>
					Servicio:
					<select value={service} onChange={handleServiceChange} className="form-control">
					<option value="">Seleccione una membresía</option>
					<option value="1">Circuito Spa</option>
					<option value="2">Masajes</option>
					<option value="3">Tratamientos Faciales</option>
					<option value="4">Rituales de Belleza</option>
					</select>
				</label>
			</div>
			<div className="field">
				{error && <div style={{ color: 'red' }}>{error}</div>}
				<button type="submit" className="form-submit">Reservar</button>
			</div>
			</form>
		<Link to="/confirmation">Reservar</Link>
		<br />
		<Link to="/home">Home</Link>
		</div>
  );
}