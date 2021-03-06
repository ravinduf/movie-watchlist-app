import React from 'react'

import SingleMovie from './SingleMovie'

const Movies = ({movies}) => {

    return (
        <div className="d-flex flex-row flex-wrap justify-content-around m-5">
           
            {movies.map((movie, index) => (
                <SingleMovie movie={movie} key={index} />

            ))}


        </div>
    )
}

export default Movies
