import React from 'react'

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'



const MovieModal = ({handleClose, show, movie}) => {

  return (
    <div onClick={e => e.stopPropagation()}>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update the {movie.name} status</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Button>Watched</Button>
          <Button>Not watched</Button>
        </Modal.Body>

        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}> 
              Close
            </Button>
            <Button variant="primary">
              Save Changes
            </Button>
        </Modal.Footer>
      </Modal>
    </div>
    
  )
}

export default MovieModal
