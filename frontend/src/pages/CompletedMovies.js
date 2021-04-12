//shows completed movies
import React, {useState, useEffect, useContext } from 'react'

import Movies from '../components/Movies';
import { MoviesContext } from '../contexts/MoviesContext';

const CompletedMovies = () => {
    const { movies } = useContext(MoviesContext)
    const [completedMovies, setCompletedMovies] = useState([])

    

    useEffect(() => {
        const tempMovies = movies.filter(movie => movie.watched )
        console.log(tempMovies)
        setCompletedMovies(tempMovies)

    },[movies])

    return (
        <div>
            <Movies movies={completedMovies} />
            
        </div>
    )
}

export default CompletedMovies
