import React from 'react'

import './service-pricing.styles.scss'

const ServicePricing = ({ pricing: { title, services = [], additional } }) => {
    console.log(additional)


    return (
        <div className='service-pricing'>
            <div className='pricing-table'>
                <div className='head'>
                    <h3>{title}</h3>
                </div>

                {
                    services.map((service, idx) => (
                        <div key={idx} className='price-row'>
                            <div>{service.name}</div>
                            <div>{service.price}€</div>
                        </div>
                    ))
                }
            </div>

            <p className='additional'>{additional}</p>

            {title === "Visage" && (<div className='pricing-table'>
                <div className='head'>
                    <h3>Depilácia</h3>
                </div>

                <div className='price-row'>
                    <div>
                        Depilácia brady
                    </div>
                    <div>
                        3€
                    </div>
                </div>
                <div className='price-row'>
                    <div>
                        Depilácia hornej pery
                    </div>
                    <div>
                        2€
                    </div>
                </div>
                <div className='price-row'>
                    <div>
                        Depilácia predlaktia
                    </div>
                    <div>
                        8€
                    </div>
                </div>
                <div className='price-row'>
                    <div>
                        Depilácia celých rúk
                    </div>
                    <div>
                        11€
                    </div>
                </div>
                <div className='price-row'>
                    <div>
                        Depilácia podpazuśia
                    </div>
                    <div>
                        8€
                    </div>
                </div>
                <div className='price-row'>
                    <div>
                        Depilácia predkolenia
                    </div>
                    <div>
                        11€
                    </div>
                </div>
                <div className='price-row'>
                    <div>
                        Depilácia celých nôh
                    </div>
                    <div>
                        16€
                    </div>
                </div>
                <div className='price-row'>
                    <div>
                        Depilácia chrbát
                    </div>
                    <div>
                        8€
                    </div>
                </div>
            </div>)}
        </div>
    )
}

export default ServicePricing
