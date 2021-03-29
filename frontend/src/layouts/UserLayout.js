import React from 'react'
import { Container } from 'react-bootstrap'

import Header from '../components/Header'

const Layout = (props) => {
    return (
        <div>
            <Header />
            <Container>
                {props.children}
            </Container>
            
        </div>
    )
}


export default Layout
