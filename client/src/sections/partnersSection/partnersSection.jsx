import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import SectionHeading from '../../components/section-heading/section-heading.component'

import { partnersStyles, containerStyles, partnerStyles } from './partnersSection.module.scss'

const PartnersSection = ({ data }) => {
    const { allFile: { nodes: images } } = useStaticQuery(graphql`
    {
      allFile(filter: {relativeDirectory: {eq: "partners"}}) {
        nodes {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  `)

    const partnersData = data.partners.map(partner => {
        const img = images.find(img => img.childImageSharp.fluid.src.includes(partner.imgName))
        return {
            img,
            ...partner
        }
    })

    return (
        <section id='partneri' className={partnersStyles}>
            <div className='container'
                data-sal="fade"
                data-sal-duration="1500"
                data-sal-easing="ease"
            >
                <SectionHeading title={data.heading} />
                <div className={containerStyles}>
                    {partnersData.map(({ link, img }, idx) => {
                        return (
                            <div
                                className={partnerStyles}
                                key={idx}
                                data-sal="slide-up"
                                data-sal-duration="1500"
                                data-sal-easing="ease"
                                data-sal-delay={`${idx}00`}
                            >
                                <a href={link}>
                                    <Image fluid={img.childImageSharp.fluid} />
                                </a>

                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default PartnersSection
