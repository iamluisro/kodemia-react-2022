import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function CustomForm() {
    const [form, setForm] = React.useState({
        email: '',
        password: ''
    })

    function onChange(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        })
    }
	return (
		<Form>
			<Form.Group className='mb-3' controlId='formBasicEmail'>
				<Form.Label>Email address</Form.Label>
				<Form.Control onChange={onChange} type='email' name="email" placeholder='Enter email' />
				<Form.Text className='text-muted'>
					We'll never share your email with anyone else.
				</Form.Text>
			</Form.Group>

			<Form.Group className='mb-3' controlId='formBasicPassword'>
				<Form.Label>Password</Form.Label>
				<Form.Control onChange={onChange} type='password' name="password" placeholder='Password' />
			</Form.Group>
			<Form.Group className='mb-3' controlId='formBasicCheckbox'>
				<Form.Check type='checkbox' label='Check me out' />
			</Form.Group>
			<Button variant='primary' type='submit'>
				Submit
			</Button>
            {JSON.stringify(form)}
		</Form>
	);
}

export default CustomForm;
