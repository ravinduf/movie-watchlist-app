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
                <br/>
                <h3>Ratings : </h3>
                {movie.Ratings.map((rating,index) => (
                    <h4 key={index} style={{paddingLeft: '40px'}}>{rating.Source}: &nbsp;{rating.Value}</h4>
                ))}
                </Col>
            </Row>
        </Container>
    )
}

export default SingleMovieInfo
