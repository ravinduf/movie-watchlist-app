import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// import {MoviesContext} from './contexts/MoviesContext.js'

import MainLayout from './layouts/MainLayout'
import UserLayout from './layouts/UserLayout'

import Home from './pages/Home'
import CompletedMovies from './pages/CompletedMovies'
import YetToWatch from './pages/YetToWatch'
import AddMovie from './pages/AddMovie'
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import Error from './components/Error';

import PrivateRoute from './utils/PrivateRoute';
// import isLogin from './utils/isLogin';

function App() {
  // const {getMovies, movies} = useContext(MoviesContext)

  // useEffect(() => {
  //   if(isLogin()) {
  //     getMovies()
  //   }
  //   console.log(movies)
    
  // });
  
  return (
   
        <Router>
          <Switch>

            <Route path="/user/:path" exact>
              <UserLayout>
                <Switch>
                  <Route exact path="/user/sign-up" component={SignUp} />
                  <Route exact path="/user/sign-in" component={SignIn} />
                  <Route component={Error} />
                </Switch>
              </UserLayout>
            </Route>

            <Route path="/">
              <MainLayout>
                <Switch>
                  <PrivateRoute exact path="/" component={Home} />
                  <PrivateRoute exact path="/completed-movie-list" component={CompletedMovies} />
                  <PrivateRoute exact path="/yet-to-watch-list" component={YetToWatch} />
                  <PrivateRoute exact path="/add-movie" component={AddMovie} />
                  <PrivateRoute exact path="/sign-up" component={SignUp} />
                </Switch>
              </MainLayout>
            </Route>
            
          
          </Switch>
        </Router>
     
    
  );
}

export default App;
