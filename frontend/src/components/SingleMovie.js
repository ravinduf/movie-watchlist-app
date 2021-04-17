import React from 'react'

import { Card } from 'react-bootstrap'

const SingleMovie = ({movie}) => {
    
    return (
        <Card style={{ width: '16rem', marginTop: '20px' }}>
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
    height: '60vh',
    margin: '4px auto'
}


export default SingleMovie
