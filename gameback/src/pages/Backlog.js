import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './Backlog.css'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import {list} from '../actions/gamesActions'
import ModalGame from '../components/ModalGame'
import { helpHttp } from '../services/helpHttp'
import  Card  from '../components/Card'

/*const reorder =(list,startIndex, endIndex)=>{
    const result = [...list]
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0 , removed)
    return result
}*/

const columnCategory = ["Not Status", "Not Started", "In Progress", "Completed", "Abandoned"]


const Backlog = () => {

    const games = useSelector(state => state.games)
    const {id,token} = useSelector(state=>state.user.userInfo)
    const dispatch = useDispatch()


   useEffect(()=>{
        helpHttp().get('http://localhost:8000/api/videogame/list/'+ id,
        {headers:{
          "Authorization": `Bearer ${token}`
        }})
        .then(games=>{
          dispatch(list(games))
        })
    },[])

    console.log(games)


    return (
        <div className='backlog-container pt-3'>
            <div className="backlog-container-main container-lg text-white m-auto">
                <div className="backlog-container-main-row row">
                    <div className="backlog-container-main-sidebar col-lg-2">Soy una barra lateral</div>
                    <div className="backlog-container-main-body col-lg-10">
                        <div className="backlog-container-main-body-row row">

                            {columnCategory.map((category, index) => {
                                const classe = category.replace(/ /, '-')
                                return (
                                    <div className="backlog-column col-md p-2" key={index}>
                                        <h6 className={classe.toLocaleLowerCase() + ' tag'}>{category}</h6>
                                        <span className='p-1 text-secondary'>{games.gamesUser? (games.gamesUser.games[category].length) : 0}</span>
                                        <ModalGame />
                                        <div className='container-cards'>
                                            {(games.gamesUser && games.gamesUser.games[category].length > 0) ?
                                                (games.gamesUser.games[category].map((el, index) => {
                                                    console.log(el)
                                                   return (<Card game={el} index={index} />)
                                                })) :
                                                (<></>)
                                            }

                                        </div>
                                    </div>

                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )






}

export default Backlog

