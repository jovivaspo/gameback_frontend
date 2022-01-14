import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForms } from '../useHooks/useForms'
import {useSelector} from 'react-redux'

const FormSign = ({ modalBody }) => {
  const user = useSelector(state=>state.user)
  console.log(user)
  const {form, handlerSubmit, handlerChange} = useForms({modalBody})
  console.log(form)
  console.log(modalBody)

  return (
    <Form onSubmit={handlerSubmit}>
      {modalBody === 'signUp' && <Form.Group className="mb-3" controlId="formGroupEmail" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" name='name' value={form.name} onChange={handlerChange} required />
      </Form.Group>}
      <Form.Group className="mb-3" controlId="formGroupEmail" >
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email' value={form.email} onChange={handlerChange} required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password' value={form.password} onChange={handlerChange} required />
      </Form.Group>
      {modalBody === 'signUp' && <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='passwordConfirm' value={form.passwordConfirm} onChange={handlerChange} required />
      </Form.Group>}
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Button type='submit' variant='outline-light'>Submit</Button>
      </Form.Group>

    </Form>
  )
}

export default FormSign
