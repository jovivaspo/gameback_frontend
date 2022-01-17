import {useContext, useState} from 'react'
import alertContext from '../contexts/alertContext'

const initialForm={
    name:'',
    image:'',
    rating:'',
    status:'',
    position:'',
    comment:'',
}
const useFormGame =()=>{
    const [form, setForm]= useState(initialForm)
    const [game,setGame] = useState()
    const {setAlert} = useContext(alertContext)
    
   
 
    const handleChange = (e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(!form.name){
            setAlert({error:true, message:'You must select a game'})
            return false
        }
        setAlert({success:true, message:'Videogame Saved'})
       setForm(initialForm)
       setGame(null)
    }

    const handleSelectGame = (e)=>{
       
       setForm({...form,['name']:e.target.dataset.name,['image']:e.target.dataset.img})
       setGame(e.target.dataset.name)
    }

    return {form, game, handleChange, handleSubmit,handleSelectGame}
}

export {useFormGame}