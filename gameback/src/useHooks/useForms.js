import React, { useState } from 'react'
import { helpHttp } from '../services/helpHttp'
import {useDispatch} from 'react-redux'
import {sign} from '../actions/userActions'

function useForms({ modalBody }) {
  console.log(modalBody)
  const initialForm = {
    name: '',
    email: '',
    password: '',
    passwordConfirm: ''
  }
  const dispatch = useDispatch()
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
          const {id,email,token} = res
          dispatch(sign({id,email,token}))
          localStorage.setItem('userInfo',JSON.stringify({id,email,token}))
          setSuccess(`Welcome to GameBack ${email}`)
          alert(`Welcome to GameBack ${email}`)
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
          const {id,email,token} = res
          dispatch(sign(id,email,token))
          localStorage.setItem('userInfo',JSON.stringify({id,email,token}))
          setSuccess(`Sign In ${email}`)
          alert(`Sign In ${email}`)
          setForm(initialForm)
        }
      })
    }


  }

  return { form, handlerChange, handlerSubmit, error, success }
}

export { useForms }
