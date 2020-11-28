import React from 'react'
import logo from '../images/movie-reel-cinema-tool.svg'

const Header = () => {
    return (
        <div className="d-flex flex-row header bg-primary justify-content-center">
            <img src={logo} alt="" style={{height: '50px', marginRight: '20px'}}></img>
            <h1>Movie WatchList Tracker</h1>
        </div>
    )
}

export default Header
