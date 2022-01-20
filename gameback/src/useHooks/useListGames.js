import { useEffect,useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { list, changeColumnFrontend, changeOrderFrontend } from '../actions/gamesActions'
import alertContext from '../contexts/alertContext'
import { helpHttp } from '../services/helpHttp'


const useListGames = () => {
    const games = useSelector(state => state.games)
    const { id, token } = useSelector(state => state.user.userInfo)
    const dispatch = useDispatch()
    const {setAlert} = useContext(alertContext)

    const listGames = () => {
        helpHttp().get('http://localhost:8000/api/videogame/list/' + id,
            {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            .then(games => {
                dispatch(list(games))
            })
    }

    const addGame = (form) => {
        
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
                userId:id,
                position:games.gamesUser.games[form.status].length
            }
        }).then(res=>{
            if (res.error) {
                setAlert({error:true, message:res.error})
              }else{
                setAlert({success:true, message:res.message})
                listGames()
               
              }
           
        })
    }

    const deleteGame = (e) => {


        const idGame = e.target.dataset.id

        helpHttp().del('http://localhost:8000/api/videogame/delete/' + id + '/' + idGame, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then(res => {
                if (res.error) {
                    alert(res.error)
                } else {
                    alert(res.message)
                    listGames()

                }
            })
    }

    const updateList = (source, destination, games) => {
        console.log(id)
        helpHttp().put('http://localhost:8000/api/videogame/updateList/' + id, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: { source, destination, games }

        }).then(games=>dispatch(list(games)))

    }

    const onDragEnd = (result) => {

        if (!result.destination) return;

        const { source, destination } = result;

        if (source.droppableId !== destination.droppableId) {
            console.log('!Cambiando videojuego de columna!')
            dispatch(changeColumnFrontend(source,destination))
            updateList(source,destination,games)


        } else {
            console.log('!Cambiando videojuego solo de orden!')
            dispatch(changeOrderFrontend(source,destination))
            updateList(source,destination)
        }
    };

    useEffect(() => {
        console.log('recargando')
        listGames()
    }, [dispatch])

    return { games, listGames, addGame, deleteGame, onDragEnd }
}


export { useListGames }