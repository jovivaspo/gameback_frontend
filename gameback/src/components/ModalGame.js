
import { Modal, Button } from 'react-bootstrap'
import React, { useState, useContext } from 'react';
import FormGame from './FormGame';
import alertContext from '../contexts/alertContext';
import AlertMessage from './AlertMessage';
import { useFormGame } from '../useHooks/useFormGame';


function ModalGame({category}) {


  const [modalShow, setModalShow] = useState(false)
  const {alert} = useContext(alertContext)
 

  return (
    <>
      <button className='button-add text-secondary' data-category={category} 
      onClick={(e) => {
        setModalShow(true)
        }}>+</button>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={modalShow}
        onHide={() => setModalShow(false)}
      >
        <Modal.Header closeButton className='d-flex justify-content-between bg-dark text-white border border-white'>
          <h4>Add a new game</h4>
        </Modal.Header>
        <Modal.Body className='bg-dark text-white border border-white'>
          <FormGame category={category}/>
        </Modal.Body>
        <Modal.Footer className='bg-dark text-white border border-white'>
          <AlertMessage alert={alert}/>
         <Button variant='outline-light' onClick={()=>setModalShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>

  );
}



export default ModalGame