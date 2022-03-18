import React from 'react';
import NavBar from '../components/Navbar';
import GreetingSection from '../components/GreetingSection';
import CategoriesSection from '../components/CategoriesSection';
import ProductSection from '../components/ProductSection';
import Container from 'react-bootstrap/Container';
import Form from '../components/Form'

function Home() {
  const [carrito, setCarrito] = React.useState(0);
  const [products, setProducts] = React.useState([]);
  const [categories, setCategories] = React.useState([]);
  const [loading, setLoading] = React.useState('');

  function addToCart() {
    setCarrito(carrito + 1);
  }

  React.useEffect(() => {
    console.log('se dispara el useEffect');

    function getProducts() {
      setProducts([]);
      fetch('https://api-devto.vercel.app/posts')
        .then((res) => res.json())
        .then((json) => console.log(json))
        // .then((json) => setProducts(json))
        .then(() => setLoading(''));
    }

    getProducts();
    setLoading('loading');
  }, []);

  React.useEffect(() => {
    async function getCategories() {
      const resp = await fetch(
        'https://fakestoreapi.com/products/categories'
      ).then((resp) => resp.json());
      console.log('🚀 ~ file: index.js ~ line 33 ~ getCategories ~ resp', resp);
      setCategories(resp);
    }

    getCategories();
  }, []);

  return (
    <div id='App'>
      <NavBar carrito={carrito} />
      <Container>
        {/* <GreetingSection />
        <CategoriesSection categories={categories} />
        <ProductSection
          addToCart={addToCart}
          products={products}
          loading={loading}
        /> */}
       <Form />
      </Container>
    </div>
  );
}

export default Home;
