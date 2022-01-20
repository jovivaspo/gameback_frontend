import React from 'react'
import { useListGames } from '../useHooks/useListGames'
import {Button} from 'react-bootstrap'


const Card = ({game, position}) => {

    const {deleteGame} = useListGames()
  
    
    return (
        <div className="card m-1 bg-secondary">
            <img className='card-img-top' src={game.url_image} height='120px'
            />
            <div className="card-body" draggable="true">
                <h6 className="card-title text">{game.name}</h6>
                <div className="card-text">
                    <div className='col-12'>
                        <span>Rating: </span>
                        <span>{game.rating}</span>
                        <span>Position: </span>
                        <span>{game.position}</span>
                    </div>
                    <div className='col-12 d-flex justify-content-end'>
                        <Button variant='outline-light' size='sm' onClick={deleteGame} data-id={game.id}>Delete</Button>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
