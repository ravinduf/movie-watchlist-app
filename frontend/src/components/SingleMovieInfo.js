import React from 'react'
import { Container , Row, Col } from 'react-bootstrap'

const SingleMovieInfo = ({movie}) => {
    console.log(movie)
    return (
        <Container className="m-4" style={{width: '90%'}}>
            <Row >
                <Col><img src={movie.Poster} alt="Not Found" /></Col>
                <Col>
                    <h2 className="display-4">{movie.Title}</h2>
                    <h4 className="display-5">{movie.Plot}</h4>
                    <br/>
                    <h3 className="display-5">Ratings : </h3>
                    {movie.Ratings.map((rating,index) => (
                        <h4 key={index} style={{paddingLeft: '40px'}} className="display-5">{rating.Source}: &nbsp;{rating.Value}</h4>
                    ))}
                    <h4>Year: &nbsp; {movie.Year}</h4>
                    <h4>Genre: &nbsp; {movie.Genre}</h4>
                    <h4>Director: &nbsp; {movie.Director} </h4>
                    <h4>Writer: &nbsp; {movie.Writer}</h4>
                    <h4>Actors: &nbsp; {movie.Actors}</h4>
                    <h4>Runtime: &nbsp; {movie.Runtime}</h4>

                </Col>
            </Row>
        </Container>
    )
}

export default SingleMovieInfo
