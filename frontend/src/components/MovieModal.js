import React from 'react'

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'



const MovieModal = ({handleClose, show, movie}) => {
  console.log(movie)
  return (
    <div onClick={e => e.stopPropagation()}>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update the {movie.name} status</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          { movie.watched ? 
            (<Button variant="success">Mark as not watched</Button>) : 
            (<Button variant="warning">Mark as watched</Button>)  
          }
        </Modal.Body>

        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}> 
              Close
            </Button>
        </Modal.Footer>
      </Modal>
    </div>
    
  )
}

export default MovieModal
