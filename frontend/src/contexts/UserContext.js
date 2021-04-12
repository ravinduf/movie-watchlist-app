import React, { createContext, useState } from 'react';
import axios from 'axios';

export const UserContext = createContext();

export const UserContextProvider = (prosp) => {
  const [user, setUser] = useState();

  const userLogin = () => {

  }

  const userLogout = () => {

  }

  return(
    <UserContext.Provider value={{userLogin, userLogout}}>
      {props.children}
    </UserContext.Provider>
  )

    
}