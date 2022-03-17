import React from 'react';
import Badge from 'react-bootstrap/Badge';
// import categories from '../../data/categories.json';

function CategoriesSection(props) {
	// console.log('🚀 ~ file: index.js ~ line 4 ~ categories', categories);
	const { categories } = props
    console.log("🚀 ~ file: index.js ~ line 8 ~ CategoriesSection ~ categories", categories)
	return (
		<div style={{ margin: '2rem 0' }}>
			<h4>Categories</h4>
			{categories.map((category) => {
				return (
					<Badge key={category} pill className='mr-3'>
						{category}
					</Badge>
				);
			})}
		</div>
	);
}

export default CategoriesSection;
