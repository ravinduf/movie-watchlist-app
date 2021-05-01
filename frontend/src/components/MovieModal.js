import React from 'react'

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

const MovieModal = ({show, hide, movie}) => {
    console.log(movie)
    return (
        <Modal show={show} onhide={hide}>
            <Container>
            <h3>Update the {movie.name} status</h3>
            <Row>
                <Button>Watched</Button>
                <Button>Not watched</Button>
                
            </Row>

            </Container>
        </Modal>
    )
}

export default MovieModal
