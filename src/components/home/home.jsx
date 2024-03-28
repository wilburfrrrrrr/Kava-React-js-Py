import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';

export default function Home() {
	  return (
	<div className='content'>
	  <h1 className='title'>Kava</h1>
	  <h2 className='subtitle'>Bienvenidos</h2>
	  <Link to="/login" className='link'>Login</Link>
	  <br />
	  <Link to="/register" className='link'>Register</Link>
	</div>
  );
}