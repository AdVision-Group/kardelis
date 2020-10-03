import React from 'react'

import { drawerStyles } from './mobileDrawer.module.scss'

const MobileDrawer = ({ menuItems = [] }) => {
    return (
        <div className={drawerStyles}>
            <ul>
                {menuItems.map(({ name, slug }, idx) => (
                    <li key={idx}>
                        <a href={slug}>
                            {name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MobileDrawer
