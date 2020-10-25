import React from 'react';
import './App.css';

import {MoviesContextProvider} from './MoviesContext.js'
import Layout from './Layout'
import Home from './pages/Home'
function App() {
  return (
      <MoviesContextProvider>
        <Layout>
          <Home/>
        </Layout>
      </MoviesContextProvider>
    
  );
}

export default App;
