import React from 'react'

import { buttonStyles } from './buttonStyles.module.scss'

const CustomButton = ({ children, ...otherProps }) => {
    return (
        <button className={buttonStyles} {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton
