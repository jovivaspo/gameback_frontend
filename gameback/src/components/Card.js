import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Card = ({ game, index }) => {
    
    return (
        <div className="card m-1 bg-secondary" key={index}>
            <img className='card-img-top' src={game.url_image}
            />
            <div className="card-body" draggable="true">
                <h6 className="card-title text">{game.name}</h6>
                <div className="card-text">
                    <div className='col-12'>
                        <span>Rating: </span>
                        <span>{game.rating}</span>
                    </div>
                    <div className='col-12 d-flex justify-content-end' >
                        <FontAwesomeIcon icon={faTrash} style={{ cursor: 'pointer' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
