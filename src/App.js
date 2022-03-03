import logo from './logo.svg';
import Card from './components/Card'
import './App.css';

function App() {
  return (
    <div>
      <header>
       Clase 2 - React Components and Compositions
      </header>
      <div className='Card--Container'>
        <Card name='Luis' />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
