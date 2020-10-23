import React from 'react';
import './App.css';

import {MoviesContextProvider} from './MoviesContext.js'
import Layout from './Layout'
import Movies from './components/Movies'
function App() {
  return (
      <MoviesContextProvider>
        <Layout>
          <Movies/>
        </Layout>
      </MoviesContextProvider>
    
  );
}

export default App;
