import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useSearch } from '../useHooks/useSearch'


const rating = [1, 2, 3, 4, 5]
const status = ["Not Status", "Not Started", "In Progress", "Completed", "Abandoned"]

const FormGame = () => {

    const { search, handleSearch } = useSearch()


    return (
        <>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="search" className='bg-transparent text-white border border-light'
                    autoComplete="off" onChange={handleSearch}
                    placeholder="Search a videogame" />
            </Form.Group>
            <div className='row'>
                <div className="col-sm-6">
                    <Form className='form-game'>
                        <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                            <Form.Label>Rating</Form.Label>
                            <Form.Select size="sm" name="rating" className='bg-transparent text-white'>
                                <option style={{ color: 'white', background: '#212529' }}>Select</option>
                                {
                                    rating.map((el, index) => {
                                        return (
                                            <option key={index} value={el} style={{ color: 'white', background: '#212529' }}
                                                value={el}>{el}</option>
                                        )
                                    })
                                }
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                            <Form.Label>Status</Form.Label>
                            <Form.Select size="sm" name="rating" className='bg-transparent text-white'>
                                <option style={{ color: 'white', background: '#212529' }}>Select</option>
                                {
                                    status.map((el, index) => {
                                        return (
                                            <option key={index} value={el} style={{ color: 'white', background: '#212529' }}
                                                value={el}>{el}</option>
                                        )
                                    })
                                }
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Comment</Form.Label>
                            <Form.Control as="textarea" rows={2} className='bg-transparent text-white' />
                        </Form.Group>
                    </Form>
                </div>
                {search ? (
                    <div className="col-sm-6" style={{ height: '250px' }}>
                        <div style={{ height: '100%', overflowY:'scroll', overflowX: 'hidden' }}>
                            {search.map((el, index) => {

                                return (
                                    <div key={index} className="item row" style={{ width: '80%', marginTop: '20px', borderBottom: 'solid thin grey', padding: '15px' }}>
                                        <div className="col-lg-9">
                                            <h6>{el.name}</h6>
                                            <img src={el.background_image} alt={el.name} height='90px' width='180px' />
                                            <Button variant='outline-light' size='sm' className='mt-2 mb-2'>Select</Button>
                                        </div>
                                        <div className="col-lg-3" style={{ fontSize: '8px' }}>
                                            <p className='mb-1'><span style={{ textDecoration: 'underline' }}>Plataform: </span><span>{el.platforms?.map(el => { return el.platform.name + '/' })}</span></p>
                                            <p className='mb-1'><span style={{ textDecoration: 'underline' }}>Genres: </span><span>{el.genres?.map(el => { return el.name + '/' })}</span></p>
                                            <p className='mb-1'><span style={{ textDecoration: 'underline' }}>Rating: </span><span>{el.rating}</span></p>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    </div>)
                    :

                    (<></>)
                }


            </div>

        </>
    )
}

export default FormGame
