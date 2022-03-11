import React from 'react';
import Button from 'react-bootstrap/Button';

function ReactBootstrap() {
	const isDisable = false
	function click() {
		console.log(2 )
	}
	return <Button variant="primary" onClick={click} >React bootstrap here!</Button>;
}

export default ReactBootstrap;
