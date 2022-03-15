import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function NavBar(props) {
	const { carrito } = props
	// props.carrito
	return (
		<Navbar bg='dark' variant='dark'>
			<Container>
				<Navbar.Brand href='#home'>
					Kodemia
				</Navbar.Brand>
				<h2 style={{ color: 'white'}}>Carrito: {carrito}</h2>
			</Container>
		</Navbar>
	);
}

export default NavBar;
