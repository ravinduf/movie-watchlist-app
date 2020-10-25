//Simple navbar 
import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navbar = () => {
    

    return (
            <>
                <Nav  className="nav d-flex justify-content-around bg-dark mt-5 p-3">
                    <Nav.Item>
                        <Link className="link active" to="/" onClick={handleActive()} >All</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className="link" to="/completed-movie-list">Completed</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className="link" to="/yet-to-watch-list">Not completed</Link>
                    </Nav.Item>
                
                </Nav>
            
            </>
    )
}



export default Navbar

