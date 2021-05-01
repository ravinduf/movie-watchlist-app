//Simple navbar 
import React, { useState} from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const state = sessionStorage.getItem('state') ? sessionStorage.getItem('state') : 1;
    const [ activeState, setActiveState ] = useState({id : state});
   
    const handleNavState = (state) => {
      sessionStorage.setItem('state', state);
      setActiveState({id: state})
    }
    
    return (
            <>
              <Nav  className="nav d-flex justify-content-around bg-dark mt-5 p-3">
                <Nav.Item>
                    <Link className={parseInt(activeState.id) === 1 ? 'link active': 'link'} to="/"  onClick={ () => {handleNavState(1)} }>All</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link className={parseInt(activeState.id) === 2 ? 'link active': 'link'} to="/completed-movie-list" onClick={ () => {handleNavState(2)} }>Completed</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link className={parseInt(activeState.id) === 3 ? 'link active': 'link'} to="/yet-to-watch-list" onClick={ () => {handleNavState(3)} }>Not completed</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link className={parseInt(activeState.id) === 4 ? 'link active': 'link'} to="/add-movie" onClick={ () => {handleNavState(4)} }>Add Movie</Link>
                </Nav.Item>
              </Nav>
            
            </>
    )
}



export default Navbar

