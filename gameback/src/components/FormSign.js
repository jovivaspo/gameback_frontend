import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

const FormSign = () => {
  const initialForm = {
    name: '',
    email: '',
    password: '',
    passwordConfirm: ''
  }
  const [form, setForm] = useState(initialForm)

  const handlerChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handlerSubmit = (e) =>{
    e.preventDefault()
    if(form.password!==form.passwordConfirm){
      alert('Passwords does not match')
      return false
    }
   
  }

  console.log(form)

  return (
    <Form onSubmit={handlerSubmit}>
      <Form.Group className="mb-3" controlId="formGroupEmail" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" name='name' value={form.name} onChange={handlerChange} required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail" >
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email' value={form.email} onChange={handlerChange} required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password' value={form.password} onChange={handlerChange} required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='passwordConfirm' value={form.passwordConfirm} onChange={handlerChange} required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Button type='submit' variant='outline-light'>Submit</Button>
      </Form.Group>

    </Form>
  )
}

export default FormSign
