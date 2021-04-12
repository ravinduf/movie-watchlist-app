//shows all movies
import React, { useEffect, useContext } from 'react'
import { MoviesContext } from '../contexts/MoviesContext.js'

import Movies from '../components/Movies';

const Home = () => {
    const {movies, getMovies} = useContext(MoviesContext)

    useEffect(getMovies, []);
    
    return (
        <div>
            <Movies movies={movies}  />
        </div>
    )
}

export default Home
