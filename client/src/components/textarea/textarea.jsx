import React from 'react'
import { textareaContainerStyles, textareaStyles, labelStyles, shrinkLabelStyles } from './textarea.module.scss'

const CustomTextarea = ({ label, handleChange, ...otherProps }) => {
    return (
        <div className={textareaContainerStyles}>
            <textarea className={textareaStyles} onChange={handleChange} {...otherProps} />
            {label ? (
                <label
                    className={otherProps.value.length ? shrinkLabelStyles : labelStyles}
                >
                    {label}
                </label>
            ) : null}
        </div>
    )
}

export default CustomTextarea