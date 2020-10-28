import React from 'react'

import Image from 'gatsby-image'

import './service-icon.styles.scss'

const ServiceIcon = ({ title, fluid, handleClick }) => {
    return (
        <div className='service-icon' onClick={handleClick}>
            <div className='image-container'>
                <Image fluid={fluid} alt={title} />
            </div>
            <h3 className='title'>{title}</h3>
        </div>
    )
}

export default ServiceIcon
