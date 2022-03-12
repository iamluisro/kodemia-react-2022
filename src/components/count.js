import React, { useState } from 'react';

function CountExample() {
	// Declare a new state variable, which we'll call "count"
	const [number, setNumber] = useState(0);
	// count = tu variable
	// setCount = la función que actualiza tu variable
	// lo que va entre parentesis del useState() es tu estadoInicial

	return (
		<div>
			<p>You clicked {number} times</p>
			<button onClick={() => setNumber(number + 10)}>Click me</button>
		</div>
	);
}

export default CountExample;
