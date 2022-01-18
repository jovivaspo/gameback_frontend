import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { list } from '../actions/gamesActions'
import { helpHttp } from '../services/helpHttp'

const useListGames = () => {
    const games = useSelector(state => state.games)
    const {id,token} = useSelector(state=>state.user.userInfo)
    const dispatch = useDispatch()

    const listGames = () =>{
        helpHttp().get('http://localhost:8000/api/videogame/list/'+ id,
        {headers:{
          "Authorization": `Bearer ${token}`
        }})
        .then(games=>{
          dispatch(list(games))
        })
    }

    const deleteGame = (e) =>{

       
        const idGame = e.target.dataset.id

        helpHttp().del('http://localhost:8000/api/videogame/delete/'+ id + '/' + idGame,{
            headers:{
                "Authorization": `Bearer ${token}`
            }
        })
        .then(res=>{
            if(res.error){
                alert(res.error)
            }else{
                alert(res.message)
                listGames()
            
            }
        })
    }

   useEffect(()=>{
       listGames()
    },[])

    return {games,listGames, deleteGame}
}


export {useListGames}