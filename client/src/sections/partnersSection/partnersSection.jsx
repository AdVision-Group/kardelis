import React from 'react'

import { partnersStyles } from './partnersSection.module.scss'

const PartnersSection = ({ data }) => {
    return (
        <section className={partnersStyles}>
            {data.map(({ link, name }, idx) => {
                return (
                    <div key={idx}>
                        <a href={link}>{name}</a>
                    </div>
                )
            })}
        </section>
    )
}

export default PartnersSection
