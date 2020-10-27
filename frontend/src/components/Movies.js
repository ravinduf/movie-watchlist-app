import React,{ useEffect, useContext} from 'react'
import {MoviesContext} from  '../MoviesContext.js'

import SingleMovie from './SingleMovie'

const Movies = ({movies}) => {

    console.log(movies)

    
    return (
        <div>
            Movies
            {movies.map((movie, index) => (
                <SingleMovie movie={movie} key={index} />

            ))}


        </div>
    )
}

export default Movies
