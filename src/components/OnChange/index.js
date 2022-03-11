import React from 'react';

function Form() {
	function grabarInfo(event) {
		console.log(event.target.value)
	}

	return (
		<form>
			<input
				placeholder='Ingresa aquí tu info'
				onChange={(event) => grabarInfo(event)}
			/>
			<button>Submit form!</button>
		</form>
	);
}

export default Form;
