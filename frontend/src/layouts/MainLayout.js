import React from 'react'
import { Container } from 'react-bootstrap'

import Header from '../components/Header'
// import Movies from '../components/Movies'
import Navbar from '../components/Navbar'

const Layout = (props) => {
    return (
        <div>
            <Header />
            <Container>
                <Navbar/>
                {props.children}
            </Container>
            
        </div>
    )
}


export default Layout
