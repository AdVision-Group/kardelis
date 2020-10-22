import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll';

import { openDrawerStyles, closeDrawerStyles } from './mobileDrawer.module.scss'

const MobileDrawer = ({ menuItems = [], setShowDrawer, showDrawer, showNav }) => {
    const handleClick = (slug) => {
        setShowDrawer(false)
        scrollTo(slug)
    }

    return (
        <div className={showDrawer ? openDrawerStyles : closeDrawerStyles} style={!showNav ? { paddingTop: "20rem" } : null}>
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
