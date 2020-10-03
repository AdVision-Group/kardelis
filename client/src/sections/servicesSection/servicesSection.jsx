import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import { servicesStyles, containerStyles, rowStyles, colStyles, illuStyles, outlineStyles } from './servicesSection.module.scss'

const ServicesSection = ({ data }) => {
    const query = useStaticQuery(graphql`
    {
      allFile(filter: {relativeDirectory: {eq: "services"}}) {
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

    console.log(query.allFile.nodes[0].childImageSharp.fluid)

    return (
        <section className={servicesStyles}>
            {data.map(({ heading, content }, idx) => {
                return (
                    <div className={containerStyles} key={idx}>
                        <div className='container'>
                            {idx === 0 && <div className={illuStyles} />}
                            <div className={rowStyles}>
                                <div className={colStyles}>
                                    <Image fluid={query.allFile.nodes[idx].childImageSharp.fluid} />
                                    <div className={outlineStyles} />
                                </div>
                                <div className={colStyles}>
                                    <h2>{heading}</h2>
                                    <p>{content}</p>
                                </div>
                            </div>
                            {idx === 1 && <div className={illuStyles} />}
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default ServicesSection
