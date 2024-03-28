import React from "react";
import { Link } from "react-router-dom";

export default function NotUserFound() {
	  return (
	<div>
	  <h1>Kava</h1>
	  <h2>Usuario no encontrado</h2>
	  <Link to="/home">Home</Link>
	</div>
  );
}