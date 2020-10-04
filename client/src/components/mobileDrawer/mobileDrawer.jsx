import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll';

import { drawerStyles } from './mobileDrawer.module.scss'

const MobileDrawer = ({ menuItems = [], setShowDrawer }) => {
    const handleClick = (slug) => {
        setShowDrawer(false)
        scrollTo(slug)
    }

    return (
        <div className={drawerStyles}>
            <ul>
                {menuItems.map(({ name, slug }, idx) => (
                    <li key={idx}>
                        <button onClick={() => handleClick(slug)}>
                            {name}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MobileDrawer
