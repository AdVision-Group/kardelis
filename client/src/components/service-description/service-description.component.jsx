import React from 'react'

import './service-description.styles.scss'

const ServiceDescription = ({ desc = "Pripravujeme", heading }) => {
    return (
        <div className='service-description'>

            {desc === 'Pripravujeme' ? (
                <h2 className='under-contruction-title'>{desc}</h2>
            ) : (
                    <React.Fragment>
                        <h2 className='under-contruction-title'>{heading}</h2>
                        <p className='desc'>{desc}</p>
                    </React.Fragment>
                )}
        </div>
    )
}

export default ServiceDescription
