import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './Card.scss';

// 1. agreguemos un botón para sumar la cantidad que queremos comprar
// 2. agreguemos un corazón de ícono para poder guardar como favorito
// 3. agreguemos un estados para llevar la cuenta
// 4. agreguemos un estados para saber si un usuario agrego el producto como fav

function CardComponent(props) {
	console.log('🚀 ~ file: Card.jsx ~ line 11 ~ CardComponent ~ props', props);
	const { addToCart } = props;
	return (
		<Card style={{ width: '18rem' }}>
			<Card.Img
				variant='top'
				src='https://getuikit.com/v2/docs/images/placeholder_200x100.svg'
			/>
			<Card.Body>
				<Card.Title>Card Title</Card.Title>
				<Card.Text>
					Some quick example text to build on the card title and make up the
					bulk of the card's content.
				</Card.Text>
				<Button variant='primary' onClick={addToCart}>
					Add to cart
				</Button>
			</Card.Body>
		</Card>
	);
}

export default CardComponent;
