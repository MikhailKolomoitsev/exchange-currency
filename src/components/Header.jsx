import React, { useEffect } from 'react'
import { useState } from 'react'
import { NavLink } from 'react-bootstrap';
import ThemeButton from './DarkMode';

const Header = () => {

    return (
        <div style={{
            backgroundColor:'#a5a5a5',
            // border: theme ? 'thick solid black' : 'thick solid #a5a5a5'
        }} className='d-flex justify-content-between p-2 m-0'>
            <div className='d-flex'>
                <NavLink to={'/'} style={{ color: 'white' }}>All Currencies</NavLink>
                <NavLink to={'/my-currencies'} style={{ color: 'white' }}>My Currencies</NavLink>
            </div>
            <ThemeButton />
        </div>

    )
}

export default Header


