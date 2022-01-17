import React from 'react'

const Card = () => {
    return (
        <div className="card m-1 bg-secondary">
        <img className='card-img-top' src="https://as01.epimg.net/meristation/imagenes/2021/07/20/avances/1626758869_049177_1626771602_noticia_normal.jpg"
        />
        <div className="card-body" draggable="true">
            <h6 className="card-title text">Fifa 22</h6>
            <div className="card-text">
                <div className='col-12'>
                    <span>Plattaform: </span>
                    <span>Pc</span>
                    <div className='col-12'>
                        <span>Rating: </span>
                        <span>8/10</span>
                    </div>
                    <div className='col-12 d-flex justify-content-end' >
                        <FontAwesomeIcon icon={faTrash} style={{ cursor: 'pointer' }} />
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Card
