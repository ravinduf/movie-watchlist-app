import React,{ useEffect, useContext} from 'react'
import {MoviesContext} from  '../MoviesContext.js'

const Movies = () => {
    const {movies, getMovies} = useContext(MoviesContext);
    
    useEffect(() => {
        getMovies();
        
    }, []);

    console.log(movies)
    return (
        <div>
            
        </div>
    )
}

export default Movies
