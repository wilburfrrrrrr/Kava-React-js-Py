import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import ImageSlider from '../imageSlider/imageSlider';

export default function Home() {
	
	const slideImages = [
		'/assets/img/img1.jpg',
		'/assets/img/img2.jpg',
		'/assets/img/img4.jpg',
		'/assets/img/img5.jpg',
		'/assets/img/img7.jpg',
	]
	  return (
	<div className='general'>
		<header>
			<h1 className='title'>Kava</h1>
			<button>
				<Link to="/login" className='link'>Login</Link>
			</button>
			<button>
				<Link to="/register" className='link'>Register</Link>
			</button>
		</header>
		<div className='container'>
			<ImageSlider slideImages={slideImages}/>
		</div>
	</div>
  );
}