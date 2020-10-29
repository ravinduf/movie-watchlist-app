//shows completed movies
import React, {useState, useEffect, useContext } from 'react'

import Movies from '../components/Movies';
import { MoviesContext } from '../MoviesContext';

const CompletedMovies = () => {
    const [completedMovies, setCompletedMovies] = useState([])

    const { movies } = useContext(MoviesContext)

    useEffect(() => {
        const tempMovies = movies.filter(movie => movie.watched )
        console.log(tempMovies)
        setCompletedMovies(tempMovies)

    },[])

    return (
        <div>
            <Movies movies={completedMovies} />
            
        </div>
    )
}

export default CompletedMovies
