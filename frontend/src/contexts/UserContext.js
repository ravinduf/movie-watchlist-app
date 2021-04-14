import React, { createContext, useState } from 'react';
import axios from 'axios';

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const [user, setUser] = useState();

  const userLogin = (username, token) => {
    localStorage.setItem('username', username)
    localStorage.setItem('token', token)
  }

  const userLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('token');
  }

  const checkUserLogin = () => {
    return localStorage.getItem('token');
  }

  return(
    <UserContext.Provider value={{userLogin, userLogout, checkUserLogin}}>
      {props.children}
    </UserContext.Provider>
  )

    
}