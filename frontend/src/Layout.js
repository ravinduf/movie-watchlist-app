import React from 'react'
import Header from './components/Header'
import Movies from './components/Movies'

const Layout = (props) => {
    return (
        <div>
            <Header />
            <Movies />
            {props.children}
        </div>
    )
}


export default Layout
