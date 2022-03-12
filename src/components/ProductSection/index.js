import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from '../Card';

function ProductSection() {
	return (
		<div>
			<h4>New Products</h4>
			<Container fluid>
				<Row>
					<Card />
					<Card />
					<Card />
				</Row>
			</Container>
		</div>
	);
}

export default ProductSection;
