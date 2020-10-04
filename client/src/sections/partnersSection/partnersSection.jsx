import React from 'react'

import { partnersStyles, containerStyles, illuStyles } from './partnersSection.module.scss'

const PartnersSection = ({ data }) => {
    return (
        <section id='o-nas' className={partnersStyles}>
            <div className='container'>
                <h1>{data.heading}</h1>
                <div className={illuStyles} />
                <div className={containerStyles}>
                    {data.partners.map(({ link, name }, idx) => {
                        return (
                            <div key={idx}>
                                <a href={link}>{name}</a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default PartnersSection
