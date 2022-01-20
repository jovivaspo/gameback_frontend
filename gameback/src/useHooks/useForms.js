import React, { useState, useContext } from 'react'
import { helpHttp } from '../services/helpHttp'
import {useDispatch, useSelector} from 'react-redux'
import {sign} from '../actions/userActions'
import alertContext from '../contexts/alertContext'
import { useListGames } from './useListGames'

function useForms({ modalBody }) {
 // console.log(modalBody)
  const initialForm = {
    name: '',
    email: '',
    password: '',
    passwordConfirm: ''
  }
  const dispatch = useDispatch()
  const [form, setForm] = useState(initialForm)
  const {setAlert} = useContext(alertContext)
 

  const handlerChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handlerSubmit = (e) => {
    e.preventDefault()
    
    if (form.password.length < 6) {
      setAlert({error:true, message:'Password with less than 6 elements'})
      return false
    }
    //////////SIGN UP//////////////////
    if (modalBody === 'signUp') {
      if (form.password !== form.passwordConfirm) {
        setAlert({error:true, message:'Passwords does not match'})
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
          setAlert({error:true, message:res.error})
        }
        else {
          const {id,email,token} = res
          dispatch(sign({id,email,token}))
          localStorage.setItem('userInfo',JSON.stringify({id,email,token}))
         
          setAlert({success:true, message:`Welcome to GameBack ${email}`})
          setForm(initialForm)
        }
      })

    } else {
      //////////lOGIN//////////////////
      const {email,password} = form
      helpHttp().post('http://localhost:8000/api/users/login',{
        headers:{"Content-Type": "application/json"},
        body:{email,password}
      })
      .then(res=>{
        if (res.error) {
          setAlert({error:true, message:res.error})
        }
        else {
          const {id,email,token} = res
          dispatch(sign(id,email,token))
          
          localStorage.setItem('userInfo',JSON.stringify({id,email,token}))
          setAlert({success:true, message:`Sign In ${email}`})
          setForm(initialForm)
        }
      })
    }


  }

  return { form, handlerChange, handlerSubmit }
}

export { useForms }
