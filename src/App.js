import logo from './logo.svg';
import Card from './components/Card';
import './App.scss';
import Form from './components/OnChange';

function App() {
	return (
		<div>
			<header>Clase 2 - React Components and Compositions</header>
			<div className='Card--Container'>
				<Card name='Luis' />
				<Card />
				<Card />
				<Card />
			</div>
			<Form />
		</div>
	);
}

export default App;
