import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {MoviesContextProvider} from './contexts/MoviesContext.js'
import {UserContextProvider} from './contexts/UserContext.js'


ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <MoviesContextProvider>
        <App />
      </MoviesContextProvider>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

