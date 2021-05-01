import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const [user, setUser] = useState();

  const userLogin = (username, token) => {
    localStorage.setItem('username', username)
    localStorage.setItem('token', token)
    setUser(username);
  }

  const userLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    setUser(null);
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