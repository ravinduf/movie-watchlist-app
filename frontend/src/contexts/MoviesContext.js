import React, { createContext, useState } from 'react';
import axios from 'axios';
import authHeader from '../services/authheader';

export const MoviesContext = createContext();

export const MoviesContextProvider = (props) => {
    const [movies, setMovies] = useState([]);

    const [ activeState, setActiveState ] = useState({id : 1})

    const handleNavState = (id) => {
        setActiveState({id: id})
    }

    const getMovies = async () => {
      console.log(authHeader())
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/movielist`, {
              headers: {
                "Authorization": authHeader()
              }
            }
            );
            setMovies(res.data)
        }
        catch(err){
            console.log(err)
        }
    }

    return(
        <MoviesContext.Provider value={{movies, setMovies, getMovies, handleNavState, activeState}}>
            {props.children}
        </MoviesContext.Provider>
    )
} 