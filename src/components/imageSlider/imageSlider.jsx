import React, { useState } from "react";
import './imageSlider.css';

export default function ImageSlider( { slideImages }) {
	const [index, setIndex] = useState(0);

	const handlePrev = () => {
		setIndex((index - 1 + slideImages.length) % slideImages.length);
	}

	const handleNext = () => {
		setIndex((index + 1) % slideImages.length);
	}

	return (
		<div className='slider'>
			<div className='image'>
				<img src={slideImages[index]} alt='slide'/>
			</div>
			<div className='buttons'>
				<button className="prev" onClick={handlePrev}>Prev</button>
				<button className="next" onClick={handleNext}>Next</button>
			</div>
		</div>
	);
}