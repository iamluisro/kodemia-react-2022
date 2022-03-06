import React from 'react';
import Card from '../Card';
import Cart from '../Cart';
// 1. Esta será la página de productos
// 2. Vamos a darle estructura
// 3. Ya tenemos nuestro componente de tarjeta. Vamos a importarlo!
// 4. Ya tenemos nuestro componente de Carrito. Vamos a importarlo!
// 5. Vamos a importar un archivo de datos que tiene muchos productos
// 6. Vamos a imprimir los datos en el browser
// 7. Vamos a iterar sobre los productos renderizando un componente de Carrito

function Products() {
	const [productsInCart, setProductsInCart] = React.useState(0);

	function addToCart() {
		setProductsInCart(productsInCart + 1);
	}

	return (
		<div>
			<Cart quantity={productsInCart} />
			<Card addToCart={addToCart} />
		</div>
	);
}

export default Products;
