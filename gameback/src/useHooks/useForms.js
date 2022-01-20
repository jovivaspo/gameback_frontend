import { useState, useContext } from 'react'
import {useDispatch} from 'react-redux'
import {sign, login} from '../actions/userActions'
import alertContext from '../contexts/alertContext'


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
          dispatch(sign(name,email,password,setAlert, setForm, initialForm))
          
    } else {
      //////////lOGIN//////////////////
      const {email,password} = form
      dispatch(login(email,password,setAlert, setForm, initialForm))
    }


  }

  return { form, handlerChange, handlerSubmit }
}

export { useForms }
