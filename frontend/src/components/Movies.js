import React,{ useEffect, useState} from 'react'
import {MoviesContext} from  '../MoviesContext'
import axios from 'axios'

const Movies = () => {
    const {movies, setMovies, getMovies} = useContext(MoviesContext);
    
    useEffect(() => {

        
        getMovies()
        console.log(movies)
    }, []);


    return (
        <div>
            
        </div>
    )
}

export default Movies
