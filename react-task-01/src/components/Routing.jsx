import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import Shop from './Shop';
import Contact from './Contact';
import About from './About';
import Cart from './Cart';

export default function Routing() {
    return (
        <>
            <Routes>
                <>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/shop' element={<Shop />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/cart' element={<Cart />} />
                </>
            </Routes>
        </>
    )
}
