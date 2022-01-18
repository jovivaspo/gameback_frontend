import {useContext, useState} from 'react'
import alertContext from '../contexts/alertContext'
import { helpHttp } from '../services/helpHttp'
import { useListGames } from './useListGames'


const useFormGame =(category)=>{

   
    const initialForm=()=>{
      return { name:'',
        image:'',
        rating:'',
        status:category,
        position:'',
        comment:'',}
    }
    const [form, setForm]= useState(initialForm)
    const [game,setGame] = useState()
    const {setAlert} = useContext(alertContext)
    const {listGames} = useListGames()
   
   
 
    const handleChange = (e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }

    const handleSelectGame = (e)=>{
       
        setForm({...form,['name']:e.target.dataset.name,['image']:e.target.dataset.img})
        setGame(e.target.dataset.name)
     }

    const handleSubmit = (e) =>{
        e.preventDefault()

        const {id,token} = JSON.parse(localStorage.getItem('userInfo')) 

        if(!form.name){
            setAlert({error:true, message:'You Must Select A Game'})
            return false
        }
        helpHttp().post('http://localhost:8000/api/videogame/add',{
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body:{
                name:form.name,
                url_image:form.image,
                rating:form.rating,
                status:form.status,
                comment:form.comment,
                userId:id
            }
        }).then(res=>{
            if (res.error) {
                setAlert({error:true, message:res.error})
              }else{
                setAlert({success:true, message:res.message})
                setForm(initialForm)
                setGame(null)
                listGames()
               
              }
           
        })
       
       
    }

    
    return {form, game, handleChange, handleSubmit,handleSelectGame}
}

export {useFormGame}