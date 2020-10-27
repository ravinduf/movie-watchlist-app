import React from 'react'

import { Card } from 'react-bootstrap'

const SingleMovie = ({movie}) => {
    console.log(movie)
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={movie.poster} />
            <Card.Body>
                <Card.Title>{movie.name}</Card.Title>
                
                {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
        </Card>
    )
}

export default SingleMovie
