//Simple navbar 
import React, { useState, useContext } from 'react'
import { MoviesContext } from '../MoviesContext.js'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navbar = () => {
    
    // const [ activeState, setActiveState ] = useState({id : 1})

    // const handleNavState = (id) => {
    //     setActiveState({id: id})
    // }
    const {activeState, handleNavState } = useContext(MoviesContext)

    return (
            <>
                <Nav  className="nav d-flex justify-content-around nav mt-5 p-3">
                    <Nav.Item>
                        <Link className={activeState.id === 1 ? 'link active': 'link'} to="/"  onClick={ () => {handleNavState(1)} }>All</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className={activeState.id === 2 ? 'link active': 'link'} to="/completed-movie-list" onClick={ () => {handleNavState(2)} }>Completed</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className={activeState.id === 3 ? 'link active': 'link'} to="/yet-to-watch-list" onClick={ () => {handleNavState(3)} }>Not completed</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className={activeState.id === 4 ? 'link active': 'link'} to="/add-movie" onClick={ () => {handleNavState(4)} }>Add Movie</Link>
                    </Nav.Item>
                
                </Nav>
            
            </>
    )
}



export default Navbar

