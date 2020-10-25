//Simple navbar 
import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
            <>
                <Nav  className="d-flex justify-content-around bg-dark mt-5">
                    <Nav.Item>
                        <Link to="/">All</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/completed-movie-list">Completed</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/yet-to-watch-list">Not completed</Link>
                    </Nav.Item>
                
                </Nav>
            
            </>
    )
}



export default Navbar

