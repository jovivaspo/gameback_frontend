import React,{useContext, useState, useEffect} from 'react'
import alertContext from '../contexts/alertContext'
import {Alert} from 'react-bootstrap'
import './Alert.css'

const AlertMessage = ({alert}) => {
    const {setAlert, initialAlert} = useContext(alertContext)
    const [show,setShow] = useState(true)
    console.log('Alerta es:', alert)

 useEffect(() => {

        setAlert(alert)
        setShow(true)

      setTimeout(()=>{
        setAlert(initialAlert)
        setShow(false)
       },2500)
        
    },[alert])


    return (
      <>
        {alert && <Alert className='alert' show={show} variant={alert.error? 'danger' : 'success'}>{alert.message}</Alert> } 
      </>
   
    )
}

export default AlertMessage
