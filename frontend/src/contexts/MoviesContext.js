import React, { createContext, useState } from 'react';
import axios from 'axios';
import authHeader from '../utils/authheader';

export const MoviesContext = createContext();

export const MoviesContextProvider = (props) => {
  const [movies, setMovies] = useState([]);

  const [ activeState, setActiveState ] = useState({id : 1})

  const handleNavState = (id) => {
      setActiveState({id: id})
  }

  const getMovies = async () => {
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

  const updateMovie = async ( movieToUpdate ) => {
     
    const tempMovies = movies.map(movie => movie.id === movieToUpdate.id ? movieToUpdate : movie)
    setMovies(tempMovies)

    try {
      const res = await axios.put(`${process.env.REACT_APP_API_URL}/api/movielist/update-movie/${movieToUpdate.id}`, movieToUpdate, {
        headers: {
          "Authorization": authHeader()
        }
      })
      console.log('res')
    }
    catch (err){
      console.log(err);
    }
  }

  const deleteMovie = async ( movieToDelete ) => {
     
    const tempMovies = movies.filter( movie => movie.id !== movieToDelete.id )
    setMovies(tempMovies)
    
    try {
      const res = await axios.delete(`${process.env.REACT_APP_API_URL}/api/movielist/delete-movie/${movieToDelete.id}`, {
        headers: {
          "Authorization": authHeader()
        }
      })
     
    }
    catch (err){
      console.log(err);
    }
  }
  
  return(
      <MoviesContext.Provider value={{movies, setMovies, getMovies, updateMovie, deleteMovie}}>
          {props.children}
      </MoviesContext.Provider>
  )
} 