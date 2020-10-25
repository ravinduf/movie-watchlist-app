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
        <h1>Home</h1>
        </div>
    )
}

export default Home
