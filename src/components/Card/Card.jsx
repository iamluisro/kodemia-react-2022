import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './Card.scss';
import Badge from 'react-bootstrap/Badge';
// El objetivo es saber si un comprador agregó el producto a sus favorite

function CardComponent(props) {
	const {addToCart} = props
	const [addedToFav, setAddedToFav] = React.useState(false)

	function addToFav() {
		console.log('add to fav');
		setAddedToFav(true)
	}
	return (
		<Card style={{ width: '18rem', marginRight: '2rem' }}>
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
					Agregar a carrito
				</Button>
				{addedToFav && (
					<Badge pill bg='primary'>
					Carrito 4
					</Badge>
				)}
			</Card.Body>
		</Card>
	);
}

export default CardComponent;
