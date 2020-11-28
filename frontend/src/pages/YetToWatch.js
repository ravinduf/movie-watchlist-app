//show movies yet to watch
import React, {useState, useEffect, useContext } from 'react'

import Movies from '../components/Movies';
import { MoviesContext } from '../MoviesContext'

const YetToWatch = () => {
    const [notCompletedMovies, setNotCompletedMovies] = useState([])

    const { movies } = useContext(MoviesContext)

    useEffect(() => {
        const tempMovies = movies.filter(movie => !movie.watched )
        setNotCompletedMovies(tempMovies)
    }, [movies])
    return (
        <div>
            <Movies movies={notCompletedMovies} />
        </div>
    )
}

export default YetToWatch
    