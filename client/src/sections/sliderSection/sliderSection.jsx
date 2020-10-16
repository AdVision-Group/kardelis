import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import CustomSlider from '../../components/slider/slider'
import { sliderStyles } from './sliderSection.module.scss'

const SliderSection = () => {
    const data = useStaticQuery(graphql`
    {
      allFile(filter: {relativeDirectory: {eq: "slider"}}) {
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
    const items = data.allFile.nodes.map((img, idx) => {
        return {
            key: idx,
            ...img
        }
    })

    return (
        <section id='galeria' className={sliderStyles}>
            <CustomSlider items={items} />
        </section>

    )
}

export default SliderSection