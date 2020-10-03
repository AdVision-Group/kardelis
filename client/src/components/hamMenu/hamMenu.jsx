import React from 'react'


import { openHamStyles, closeHamStyles } from './hamMenu.module.scss'

const HamMenu = ({ isOpen = false, handleClick = null }) => {
    return (
        <button onClick={handleClick} className={isOpen ? openHamStyles : closeHamStyles}>
            <div />
            <div />
            <div />
        </button>
    )
}

export default HamMenu
