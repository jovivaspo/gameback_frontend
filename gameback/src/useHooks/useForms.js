import React, {useState} from 'react'
import { helpHttp } from '../services/helpHttp'

function useForms({modalBody}){
    console.log(modalBody)
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

      const handlerSubmit = (e) => {
        e.preventDefault()
        if(modalBody==='signUp'){
          if (form.password !== form.passwordConfirm) {
            alert('Passwords does not match')
            return false
          }
          const {name,email,password} = form
          helpHttp().post('http://localhost:8000/api/users/create',{
            headers:{
                "Content-Type": "application/json"
            },
            body:{name,email,password}
         }).then(res=>console.log(res))
          
        }else{
          alert('Hi, sign in!')
          setForm(initialForm)
        }
        
    
      }

      return{form,handlerChange, handlerSubmit}
}

export {useForms}
