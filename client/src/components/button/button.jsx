import React from 'react'

import { buttonStyles } from './buttonStyles.module.scss'

const CustomButton = ({ children }) => {
    return (
        <button className={buttonStyles}>
            {children}
        </button>
    )
}

export default CustomButton
