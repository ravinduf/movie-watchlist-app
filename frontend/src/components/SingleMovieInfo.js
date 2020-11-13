import React from 'react'
import { Container , Row, Col } from 'react-bootstrap'

const SingleMovieInfo = ({movie}) => {
    return (
        <Container className="m-4" style={{width: '90%'}}>
            <Row >
                <Col><img src={movie.Poster} alt="Not Found" /></Col>
                <Col>
                <h2 className="display-4">{movie.Title}</h2>
                <h4 className="display-5">{movie.Plot}</h4>
        
                </Col>
            </Row>
        </Container>
    )
}

export default SingleMovieInfo
