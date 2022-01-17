
import { Modal, Button } from 'react-bootstrap'
import React, { useState } from 'react';
import FormGame from './FormGame';


function ModalGame() {


  const [modalShow, setModalShow] = useState(false)

  
  return (
    <>
      <button className='button-add text-secondary' onClick={() => setModalShow(true)}>+</button>
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
          <FormGame/>
        </Modal.Body>
        <Modal.Footer className='bg-dark text-white border border-white'>
         <Button variant='outline-light'>Save</Button>
        </Modal.Footer>
      </Modal>
    </>

  );
}



export default ModalGame