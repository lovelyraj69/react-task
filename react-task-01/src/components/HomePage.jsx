import React from 'react'
import Navigationbar from './Navigationbar'
import About from './About'
import Shop from './Shop'
import Contact from './Contact'

export default function HomePage() {
    return (
        <>
            <Navigationbar />
            <About />
            <Shop />
            <Contact />
        </>
    )
}
