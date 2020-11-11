import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import './section-heading.styles.scss'

const SectionHeading = ({ title }) => {
    const data = useStaticQuery(graphql`
    {
      allImageSharp(filter: {fluid: {originalName: {eq: "vlnka.png"}}}) {
        nodes {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    `)

    return (
        <div className="heading-styles"
            data-sal="fade"
            data-sal-duration="1500"
            data-sal-easing="ease"
        >
            <h2>{title}</h2>
            <div className="illu-styles">
                <Image fluid={data.allImageSharp.nodes[0].fluid} />
            </div>
        </div>
    )
}

export default SectionHeading
