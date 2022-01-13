import React, { useState } from 'react'
import { helpHttp } from '../services/helpHttp'

function useForms({ modalBody }) {
  console.log(modalBody)
  const initialForm = {
    name: '',
    email: '',
    password: '',
    passwordConfirm: ''
  }
  const [form, setForm] = useState(initialForm)
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  const handlerChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handlerSubmit = (e) => {
    e.preventDefault()
    
    if (form.password.length < 6) {
      alert('Password with less than 6 elements')
      return false
    }
    if (modalBody === 'signUp') {
      if (form.password !== form.passwordConfirm) {
        alert('Passwords does not match')
        return false
      }
      const { name, email, password } = form
      helpHttp().post('http://localhost:8000/api/users/create', {
        headers: {
          "Content-Type": "application/json"
        },
        body: { name, email, password }
      }).then(res => {
        console.log(res)
        if (res.error) {
          setError(res.error)
          alert(res.error)
        }
        else {
          setSuccess(`Welcome to GameBack ${res.email}`)
          alert(`Welcome to GameBack ${res.email}`)
          setForm(initialForm)
        }
      })

    } else {
      const {email,password} = form
      helpHttp().post('http://localhost:8000/api/users/login',{
        headers:{"Content-Type": "application/json"},
        body:{email,password}
      })
      .then(res=>{
        if (res.error) {
          setError(res.error)
          alert(res.error)
        }
        else {
          setSuccess(`Sign In ${res.email}`)
          alert(`Sign In ${res.email}`)
          setForm(initialForm)
        }
      })
      setForm(initialForm)
    }


  }

  return { form, handlerChange, handlerSubmit, error, success }
}

export { useForms }
