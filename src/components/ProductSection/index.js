import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from '../Card';
// import products from '../../data/products.json';


function ProductSection(props) {
	const { addToCart, products, loading } = props;
	return (
		<div>
			<h4>New Products</h4>
			<Container fluid>
				<Row>
					{loading}
					{products.map((product) => {
						const { title, description, price, image, id } = product;
						return (
							<Card
								key={id}
								addToCart={addToCart}
								title={title}
								description={description}
								price={price}
								image={image}
							/>
						);
					})}
				</Row>
			</Container>
		</div>
	);
}

export default ProductSection;
