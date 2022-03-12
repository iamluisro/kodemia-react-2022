import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function CustomForm() {
    const [form, setForm] = React.useState({
        email: '',
        password: '',
        edad: 0
    });

	function grabar(event) {
    console.log("🚀 ~ file: index.js ~ line 7 ~ grabar ~ event", event)
     setForm({
         ...form,
        [event.target.name]: event.target.value
     })
    }

    function enviarDatos(event) {
        event.preventDefault()
        alert(JSON.stringify(form))
    }

	return (
		<Form onSubmit={enviarDatos}>
			<Form.Group className='mb-3' controlId='formBasicEmail'>
				<Form.Label>Email address</Form.Label>
				<Form.Control onChange={(event) => { grabar(event) }} type='email' name='email' placeholder='Enter email' />
				<Form.Text className='text-muted'>
					We'll never share your email with anyone else.
				</Form.Text>
			</Form.Group>

			<Form.Group className='mb-3' controlId='formBasicPassword'>
				<Form.Label>Password</Form.Label>
				<Form.Control onChange={(event) => { grabar(event) }} type='password' name='password' placeholder='Password' />
			</Form.Group>
			<Form.Group className='mb-3' controlId='formBasicPassword'>
				<Form.Label>Edad</Form.Label>
				<Form.Control onChange={(event) => { grabar(event) }} type='number' name='age' placeholder='Tu edad' />
			</Form.Group>
			<Button variant='primary' type='submit' disabled={form.email === '' || form.password === ''}>
				Submit
			</Button>
            {JSON.stringify(form)}
		</Form>
	);
}

export default CustomForm;
