import React from 'react'
import './Backlog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { useState } from 'react'
import ModalGame from '../components/ModalGame'

/*const reorder =(list,startIndex, endIndex)=>{
    const result = [...list]
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0 , removed)
    return result
}*/

const columnCategory = ["Not Status","Not Started","In Progress", "Completed", "Abandoned"]

const Backlog = () => {

    return(
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
                                    <span className='p-1 text-secondary'>6</span>
                                    <ModalGame/>
                                    <div className='container-cards'></div>
                                </div>

                            )})}                                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    )

   




}

export default Backlog

