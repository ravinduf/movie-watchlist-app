import React, { useContext } from 'react'

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

import { MoviesContext } from '../contexts/MoviesContext'

const MovieModal = ({handleClose, show, movie}) => {

  const {updateMovie, deleteMovie} = useContext(MoviesContext);

  const handleMarkAsWatched = () => {
    const tempMovie = movie
    tempMovie.watched = true;
    updateMovie(tempMovie)
  }

  const handleMarkAsNotWatched = () => {
    const tempMovie = movie
    tempMovie.watched = false;
    updateMovie(tempMovie)
  }

  const handleDeleteMovie = () => {
    deleteMovie(movie)
    handleClose()
  }

  return (
    <div onClick={e => e.stopPropagation()}>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update the {movie.name} status</Modal.Title>
        </Modal.Header>

        <Modal.Body className="d-flex flex-row justify-content-around">
          { movie.watched ? 
            (<Button variant="success" onClick={handleMarkAsNotWatched} >Mark as not watched</Button>) : 
            (<Button variant="warning" onClick={handleMarkAsWatched} >Mark as watched</Button>)  
          }
          <Button variant="danger" onClick={handleDeleteMovie}>Remove from the watchlist</Button>
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
