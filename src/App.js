import logo from './logo.svg';
import './App.css';
import React from 'react';
import CustomButton from './components/Button'

function Header({name}) {

	return (
		<header style={{ display: 'flex', justifyContent: 'space-around' }}>
			<h3>This is a header</h3>
			<h3>Home</h3>
			<h3>About</h3>
			<h3>Project</h3>
			{name !== null ? <h3>{name}</h3> : null}
		</header>
	)
}

function Footer(props) {
	return (
		<React.Fragment>
			<footer>Hecho con amor por {props.name}</footer>
		</React.Fragment>
	)
}

function Layout(props) {
    console.log("🚀 ~ file: App.js ~ line 27 ~ Layout ~ props", props)
	return (
		<div id="layout">
			{props.ageCopy || ''}
			<Header name={props.name} />
				{props.children}
			<Footer name={props.name} />
		</div>
	)
}

function PageTitle(props) {
	return(
		<h2 style={{ backgroundColor: 'green'}}>{props.children}</h2>
	)
}



function App() {
	const name = null
	const age = '30'
    console.log("🚀 ~ file: App.js ~ line 48 ~ App ~ age", age)
	const ageCopy = age ? `Tengo ${age} años de edad.` : ''
	return (
		<div className='App'>
			<Layout
				name={name}
				ageCopy={ageCopy}
				age={age}
			>
				<main className='App-header'>
					<PageTitle>Hola, soy {name}</PageTitle>
					<PageTitle>Esta es mi bio</PageTitle>
					<PageTitle>Titulo adicional</PageTitle>
					{age !== null ? <h5>{ageCopy}</h5> : null}
					<p>Breve bio</p>
					<CustomButton color="blue">Dale click aquí</CustomButton>
					<CustomButton color="green">Sign up</CustomButton>
					<CustomButton color="black">Sign in</CustomButton>
					<img src={logo} className='App-logo' alt='logo' />
				</main>
			</Layout>
		</div>
	);
}

export default App;






// Vamos a crear un component header
// 1. Declaremos una función llamada Header
// 2. Vamos darle el HTML que queremos!
// 2a. Que tenga un logo al lado izquierdo con el nombre "Kodemia" a su derecha, y al lado derecho que sea una lista de links: "Home, About, Projects", y tu Nombre
// 3. Insertemos el componente en nuestr componente de App

// Vamos a crear un component Footer
// 1. Declaremos una función llamada Footer
// 2. Vamos darle el HTML que queremos!
// 2a. Que diga "Hecho con amor por {tuNombre}" centrado
// 3. Insertemos el componente en nuestr componente de App

// Vamos a modificar nuestro HTML principal, aka body o main
// 1. Vamos actualizar el HTML para que diga:
//    "Hola, soy {tuNombre} y esta es mi primera app de React"
//    y vamos a mantener el logo de react como imagen
// 2. Vamos a declarar una constante bio y vamos a imprimirla dentro de un <p> tag
// 3. Insertemos el componente en nuestr componente de App


// Vamos a crear un component layout
// 1. Declaremos una función llamada Layout
// 2. Vamos darle el HTML que queremos!
// 3. Insertemos el componente en nuestr componente de App
// 4. Usar children!

//Ahora, vamos a pasar props!
// 1. Al header, vamos a pasarle el nombre de la app
// 2. Al footer, vamos a pasarle nuestro nombre "hecho con amor por {tuNombre}"
// 3. Y también al body
// 4. Pasemos una fecha al body solamente
// 5. Vamos a

// renderizado condicional
// si no hay nombre, vamos a escoder el nombre en el header


// reto!
// Crear una card de e-commerce reutilizable
// tiene que tener un titulo de producto, descrición,
// precio, imagen, y 2 botones que digan "agregar a carrito" y "agregar a favoritos"