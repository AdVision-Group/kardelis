import React, { useContext } from 'react'
import Image from 'gatsby-image'
import { PartnersContext } from '../../contexts/partners/partners.context'

import SectionHeading from '../../components/section-heading/section-heading.component'

import { partnersStyles, containerStyles, partnerStyles } from './partnersSection.module.scss'

const PartnersSection = () => {
    const { heading, partners } = useContext(PartnersContext)

    return (
        <section id='partneri' className={partnersStyles}>
            <div className='container'
                data-sal="fade"
                data-sal-duration="1500"
                data-sal-easing="ease"
            >
                <SectionHeading title={heading} />
                <div className={containerStyles}>
                    {partners.map(({ img }, idx) => {
                        return (
                            <div
                                className={partnerStyles}
                                key={idx}
                                data-sal="slide-up"
                                data-sal-duration="1500"
                                data-sal-easing="ease"
                                data-sal-delay={`${idx}00`}
                            >
                                <Image fluid={img.childImageSharp.fluid} alt={img.childImageSharp.fluid.originalName} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default PartnersSection
