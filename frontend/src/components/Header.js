import React from 'react'

import isLogin from '../utils/isLogin'
import logo from '../images/movie-reel-cinema-tool.svg'

import Dropdown from 'react-bootstrap/Dropdown';

const Header = () => {
    console.log(isLogin())
    return (
        <div className="d-flex flex-row header bg-primary">
            <div className="m-auto">
                <div className="d-flex flex-row">
                    <img src={logo} alt="" style={{height: '50px', marginRight: '20px'}}></img>
                    <h1>Movie WatchList Tracker</h1>
                </div>

            </div>
            {isLogin() ? (<Dropdown className="">
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                      {localStorage.getItem('username')}
                     
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                      <Dropdown.Item href="/user/sign-in">logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>) : 
                ("")}
            

        </div>
    )
}

export default Header
