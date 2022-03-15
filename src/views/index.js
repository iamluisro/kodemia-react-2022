import React from 'react';
import NavBar from '../components/Navbar';
import GreetingSection from '../components/GreetingSection';
import CategoriesSection from '../components/CategoriesSection';
import ProductSection from '../components/ProductSection';
import Container from 'react-bootstrap/Container';

function Home() {
    const [carrito, setCarrito] = React.useState(0)

    function addToCart() {
        setCarrito(carrito + 2)
    }
    return (
        <div id='App'>
            <NavBar carrito={carrito} />
            <Container>
                <GreetingSection />
                <CategoriesSection />
                <ProductSection addToCart={addToCart} />
            </Container>
        </div>
    );
}

export default Home;
