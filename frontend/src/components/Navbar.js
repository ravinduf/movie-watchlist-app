//Simple navbar 
import React, { useState } from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navbar = () => {
    
    const [ activeState, setActiveState ] = useState({id : 1})

    const handleNavState = (id) => {
        setActiveState({id: id})
    }

    return (
            <>
                <Nav  className="nav d-flex justify-content-around bg-dark mt-5 p-3">
                    <Nav.Item>
                        <Link className={activeState.id === 1 ? 'link active': 'link'} to="/"  onClick={ () => {handleNavState(1)} }>All</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className={activeState.id === 2 ? 'link active': 'link'} to="/completed-movie-list" onClick={ () => {handleNavState(2)} }>Completed</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className={activeState.id === 3 ? 'link active': 'link'} to="/yet-to-watch-list" onClick={ () => {handleNavState(3)} }>Not completed</Link>
                    </Nav.Item>
                
                </Nav>
            
            </>
    )
}



export default Navbar

