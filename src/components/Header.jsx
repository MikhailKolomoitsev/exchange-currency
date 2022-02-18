import React, { useEffect } from 'react'
import { useState } from 'react'
import { NavLink } from 'react-bootstrap';
import ToggleButton from 'react-toggle-button'
import { fetchData } from '../http/currencyAPI';

const Header = () => {
    const [theme, setTheme] = useState(false)

    return (
        <div style={{ backgroundColor: '#a5a5a5' }} className='d-flex justify-content-between p-2 m-0'>
            <div className='d-flex'>
                <NavLink to={'/'} style={{ color: 'white' }}>All Currencies</NavLink>
                <NavLink to={'/my-currencies'} style={{ color: 'white' }}>My Currencies</NavLink>
            </div>
            <ToggleButton
                animateThumbStyleHover={(n => {
                    return {
                        boxShadow: `0 0 ${2 + 4 * n}px rgba(0,0,0,.16),0 ${2 + 3 * n}px ${4 + 8 * n}px rgba(0,0,0,.32)`,
                    }
                })}
                inactiveLabel={'Light'}
                activeLabel={'Dark'}
                value={theme}
                onToggle={() => {
                    setTheme(!theme)
                }} />
        </div>

    )
}

export default Header
