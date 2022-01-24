import {useContext, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { list, changeColumnFrontend, changeOrderFrontend, updateBackend } from '../actions/gamesActions'
import { URL_VIDEOGAME_ADD, URL_VIDEOGAME_DELETE, URL_VIDEOGAME_UPDATE } from '../Assets/url_api'
import alertContext from '../contexts/alertContext'
import { helpHttp } from '../services/helpHttp'


const useListGames = () => {
    const games = useSelector(state => state.games)
    const { id, token } = useSelector(state => state.user.userInfo)
    const dispatch = useDispatch()
    const {setAlert, setShow} = useContext(alertContext)

     useEffect(()=>{
        dispatch(list(id,token))
    },[dispatch])

    const addGame = (form) => {
        
        helpHttp().post(URL_VIDEOGAME_ADD,{
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
                userId:id,
                idApi:form.idApi,
                position:games.gamesUser.games[form.status].length
            }
        }).then(res=>{
            if (res.error) {
                setAlert({error:true, message:res.error})
                setShow(true)
                setTimeout(()=>{
                    setShow(false)
                    setAlert({ error: false, message: null })
                },1200)
              }else{
                setAlert({success:true, message:res.message})
                setShow(true)
                setTimeout(()=>{
                    dispatch(list(id,token))
                    setShow(false)
                    setAlert({ error: false, message: null })
                },1200)

                
              }
           
        })
    }

    const editGame = (form,id) => {
 
            const originalPosition = games.gamesUser.games[form.status].find(el=>el.id===id)

         
             helpHttp().put( URL_VIDEOGAME_UPDATE + id,{
                headers:{
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body:{
                    rating:form.rating,
                    status:form.status,
                    comment:form.comment,
                    position:originalPosition? originalPosition.position : games.gamesUser.games[form.status].length
                }}).then(res=>{
                    if (res.error) {
                        alert(res.error)
                      }else{
                        alert(res.message)
                      
                      }
                })    

    }

    const deleteGame = (e) => {

        const idGame = e.target.dataset.id

        helpHttp().del(URL_VIDEOGAME_DELETE + id + '/' + idGame, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then(res => {
                if (res.error) {
                    alert(res.error)
                } else {
                    alert(res.message)
                    dispatch(list(id,token))

                }
            })
    }


    const onDragEnd = (result) => {

        console.log('Moviendo', result)

        if (!result.destination) return;

        const { source, destination } = result;

        if (source.droppableId !== destination.droppableId) {
            console.log('!Cambiando videojuego de columna!')
            dispatch(changeColumnFrontend(games,source,destination))
            dispatch(updateBackend(games,id,token,source,destination))
          
        } else {
            console.log('!Cambiando videojuego solo de orden!')
            dispatch(changeOrderFrontend(games,source,destination))
            dispatch(updateBackend(games,id,token,source,destination))
        }
    };


    return { addGame, deleteGame, onDragEnd, editGame }
}


export { useListGames }