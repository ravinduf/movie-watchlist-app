//shows all movies
import React, { useEffect, useContext } from 'react'
import { MoviesContext } from '../MoviesContext.js'

const Home = () => {
    const {movies, getMovies} = useContext(MoviesContext)

    useEffect(() => {
        getMovies();
    }, []);

    
    return (
        <div>
            
        </div>
    )
}

export default Home
