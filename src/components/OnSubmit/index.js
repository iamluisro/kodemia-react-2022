import React from 'react';

function Form() {
	let form = ''
	function grabarInfo(event) {
		console.log(event.target.value)
		form = event.target.value
	}

	function enviarInfo() {
		alert(form)
	}

	return (
		<form onSubmit={enviarInfo}>
			<input onChange={(event) => grabarInfo(event)} />
			<button type='submit'>Submit form!</button>
		</form>
	);
}

export default Form;
