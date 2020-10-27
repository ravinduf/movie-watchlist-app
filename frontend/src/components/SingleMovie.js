import React from 'react'

import { Card } from 'react-bootstrap'

const SingleMovie = ({movie}) => {
    console.log(movie)
    return (
        <Card style={{ width: '18rem', marginTop: '20px' }}>
            <Card.Img variant="top" src={movie.poster} style={imgStyle}/>
            <Card.Body>
                <Card.Title>{movie.name}</Card.Title>
                <Card.Text>
                Year released: {movie.year_released}<br/>
                Status: &nbsp;{movie.status ? 'Watched': 'Not yet watched' }
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
        </Card>
    )
}

const imgStyle = {
    width: '100%',
    height: '60vh'
}


export default SingleMovie
