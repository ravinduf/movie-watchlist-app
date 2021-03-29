import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import {MoviesContextProvider} from './MoviesContext.js'
import MainLayout from './layouts/MainLayout'
// import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import CompletedMovies from './pages/CompletedMovies'
import YetToWatch from './pages/YetToWatch'
import AddMovie from './pages/AddMovie'
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
      <MoviesContextProvider>
        <Router>
        <MainLayout>
          
            <Switch>
              
              <Route exact path="/" component={Home} />
              <Route exact path="/completed-movie-list" component={CompletedMovies} />
              <Route exact path="/yet-to-watch-list" component={YetToWatch} />
              <Route exact path="/add-movie" component={AddMovie} />
              <Route exact path="/sign-in" component={SignIn} />
              <Route exact path="/sign-up" component={SignUp} />

            </Switch>
          
          </MainLayout>
        </Router>
      </MoviesContextProvider>
    
  );
}

export default App;
