import React from 'react';
import './App.css';

import {MoviesContextProvider} from './MoviesContext'
import Layout from './Layout'

function App() {
  return (
    <MoviesContextProvider>
      <Layout>
      
      </Layout>
    </MoviesContextProvider>
    
  );
}

export default App;
