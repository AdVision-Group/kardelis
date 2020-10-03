import React from 'react'


import { openHamStyles, closeHamStyles } from './hamMenu.module.scss'

const HamMenu = ({ isOpen = false, handleClick = null }) => {
    return (
        <div onClick={handleClick} className={isOpen ? openHamStyles : closeHamStyles}>
            <div />
            <div />
            <div />
        </div>
    )
}

export default HamMenu
