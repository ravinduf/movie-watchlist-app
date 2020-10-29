import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


import {MoviesContextProvider} from './MoviesContext.js'
import Layout from './Layout'
import Home from './pages/Home'
import CompletedMovies from './pages/CompletedMovies'
import YetToWatch from './pages/YetToWatch'
import AddMovie from './pages/AddMovie'

function App() {
  return (
      <MoviesContextProvider>
        <Router>
        <Layout>
          
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/completed-movie-list" component={CompletedMovies} />
              <Route exact path="/yet-to-watch-list" component={YetToWatch} />
              <Route exact path="/add-movie" component={AddMovie} />
            </Switch>
          
          </Layout>
        </Router>
      </MoviesContextProvider>
    
  );
}

export default App;