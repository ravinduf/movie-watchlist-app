import React from 'react'

const SingleMovie = ({movie}) => {
    console.log(movie)
    return (
        <div>
            <h1>{movie.name}</h1>

        </div>
    )
}

export default SingleMovie
