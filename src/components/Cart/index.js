// 1. Crear component
// 2. Agreguemos un botón de agregar al carrito  un producto
// 4. Agreguemos un contador viual al ícono de carrito
// 5. Actualizemos el estado del carrito!

function Cart(props) {
	console.log('🚀 ~ file: index.js ~ line 7 ~ Cart ~ props', props);
	const { quantity } = props;
	return (
		<div>
			<p>
				Carrito <span>{quantity}</span>
			</p>
		</div>
	);
}

export default Cart;
