import React, {useState} from 'react'

import { Card } from 'react-bootstrap';

import MovieModal from './MovieModal';

const SingleMovie = ({movie}) => {
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    
    return (
        <Card style={{ width: '18rem', marginTop: '20px'}} onClick={handleShow}>
            <MovieModal show={showModal} hide={handleClose} movie={movie}/>
            <Card.Img variant="top" src={movie.poster} style={imgStyle}/>
            <Card.Body>
                <Card.Title><h2>{movie.name}</h2></Card.Title>
                
                <h4>Year released: {movie.year_released}<br/></h4>
                
                <h4>Status: &nbsp;{movie.watched ? 'Watched': 'Not yet watched' }</h4>
            </Card.Body>
        </Card>
    )
}

const imgStyle = {
    width: '95%',
    height: '50vh',
    margin: '4px auto'
}


export default SingleMovie
