//shows all movies
import React, { useEffect, useContext } from 'react'
import { MoviesContext } from '../contexts/MoviesContext.js'

import Movies from '../components/Movies';

const Home = () => {
    const {movies} = useContext(MoviesContext)

    return (
        <div>
            <Movies movies={movies}  />
        </div>
    )
}

export default Home
