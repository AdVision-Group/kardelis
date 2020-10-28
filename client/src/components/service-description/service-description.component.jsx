import React from 'react'

import './service-description.styles.scss'

const ServiceDescription = ({ desc = "Pripravujeme" }) => {
    return (
        <div className='service-description'>

            {desc === 'Pripravujeme' ? (
                <h2 className='under-contruction-title'>{desc}</h2>
            ) : (
                    <p className='desc'>{desc}</p>
                )}
        </div>
    )
}

export default ServiceDescription
