//shows all movies
import React, { useEffect, useContext } from 'react'
import { MoviesContext } from '../contexts/MoviesContext.js'
import { UserContext } from '../contexts/UserContext.js'

import Movies from '../components/Movies';

const Home = () => {
    const {movies, getMovies} = useContext(MoviesContext)
    const {user} = useContext(MoviesContext)

    useEffect(getMovies, [user])

    return (
        <div>
            <Movies movies={movies}  />
        </div>
    )
}

export default Home
