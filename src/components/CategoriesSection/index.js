import React from 'react';
import Badge from 'react-bootstrap/Badge';

function CategoriesSection() {
	return (
        <div style={{ margin: '2rem 0'}}>
			<h4>Categories</h4>
			<Badge pill className="mr-3">Men's clothing</Badge>
			<Badge pill className="mr-3">Jewlery</Badge>
			<Badge pill className="mr-3">Electronics</Badge>
			<Badge pill className="mr-3">Women's Clothing</Badge>
		</div>
	);
}

export default CategoriesSection;
