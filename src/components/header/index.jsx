import React from 'react';
import logo from '../../icons/broLogo.svg'

export default function Header () {

    return (
        <header className='header'>
            {/* <CallButton/> */}
            <img src={logo} alt="MY BRO AUTO"/>
            {/* <BurgerMenu/> */}
        </header>
    )
}