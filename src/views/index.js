import React from 'react';
import NavBar from '../components/Navbar';
import GreetingSection from '../components/GreetingSection';
import CategoriesSection from '../components/CategoriesSection';
import ProductSection from '../components/ProductSection';
import Container from 'react-bootstrap/Container';

function Home() {
    return (
        <div id='App'>
            <NavBar />
            <Container>
                <GreetingSection />
                <CategoriesSection />
                <ProductSection />
            </Container>
        </div>
    );
}

export default Home;
