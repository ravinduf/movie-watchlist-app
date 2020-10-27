//shows all movies
import React, { useEffect, useContext } from 'react'
import { MoviesContext } from '../MoviesContext.js'

import Movies from '../components/Movies';

const Home = () => {
    const {movies, getMovies} = useContext(MoviesContext)

    useEffect(() => {
        getMovies();
    }, []);

    
    return (
        <div>
            <h1>Home</h1>
            <Movies/>
        </div>
    )
}

export default Home
