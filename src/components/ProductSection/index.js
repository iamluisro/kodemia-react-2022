import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from '../Card';

function ProductSection(props) {
	const {addToCart} = props
	return (
		<div>
			<h4>New Products</h4>
			<Container fluid>
				<Row>
					<Card addToCart={addToCart} />
					<Card addToCart={addToCart} />
					<Card addToCart={addToCart} />
				</Row>
			</Container>
		</div>
	);
}

export default ProductSection;
