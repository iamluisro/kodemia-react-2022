import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AddProductForm() {
  const [newProduct, setNewProduct] = React.useState({
    category: '',
    description: '',
    image: '',
    price: '',
    title: null,
    name: '',
    color: ''
  });
  const [success, setSuccess] = React.useState('not sent');
  const [validated, setValidated] = React.useState(false);

  function onChange(event) {
    setNewProduct({
      ...newProduct,
      [event.target.name]: event.target.value,
    });
  }

  async function createNewProduct(event) {
    setValidated(true);
    setSuccess('new product sent');
    fetch('https://fakestoreapi.com/products', {
      method: 'POST',
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((json) => console.log(json))
      .then(() => setSuccess('todo cool!'))
      .catch(() => setSuccess('oh, no!'));
  }

  return (
    <>
      <h1>Success: {success}</h1>
      <Form noValidate onSubmit={createNewProduct} validated={validated}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type='text'
            placeholder='Title'
            name='title'
            onChange={(event) => onChange(event)}
            required
            isInvalid={!newProduct.title}
          />
          <Form.Control.Feedback type='invalid'>
            Please provide a title.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Price</Form.Label>
          <Form.Control
            type='number'
            placeholder='Price'
            name='username'
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Description</Form.Label>
          <Form.Control
            type='text'
            placeholder='Description'
            name='description'
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Image</Form.Label>
          <Form.Control
            type='text'
            placeholder='Image'
            name='image'
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Category</Form.Label>
          <Form.Control
            type='text'
            placeholder='Category'
            name='category'
            onChange={onChange}
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </>
  );
}

export default AddProductForm;
