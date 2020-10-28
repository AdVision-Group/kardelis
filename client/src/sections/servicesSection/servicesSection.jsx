import React, { useState, useRef, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import scrollTo from 'gatsby-plugin-smoothscroll'

import CustomButton from '../../components/button/button'

import { getServices } from './services.utils'

import ServiceIcon from '../../components/service-icon/service-icon.component'
import ServiceDescription from '../../components/service-description/service-description.component'
import ServicePricing from '../../components/service-pricing/service-pricing.component'
import ServiceRefSlider from '../../components/service-ref-slider/service-ref-slider.component'

import './servicesSection.styles.scss'

const ServicesSection = ({ wave, data: services }) => {
  const servicesData = useStaticQuery(graphql`
        query{
            images: allFile(filter: {relativeDirectory: {eq: "services"}}) {
            nodes {
                childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid_withWebp
                    originalName
                }
                }
            }
            }
            nechtyImages: allFile(filter: {relativeDirectory: {eq: "nechty"}}) {
                nodes {
                childImageSharp {
                    fluid {
                    ...GatsbyImageSharpFluid_withWebp
                    }
                }
                }
            }
            makeupImages: allFile(filter: {relativeDirectory: {eq: "makeup"}}) {
            nodes {
                childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid_withWebp
                }
                }
            }
            }
            kozmetikaImages: allFile(filter: {relativeDirectory: {eq: "kozmetika"}}) {
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
  const data = getServices(services, servicesData)

  const serviceRef = useRef(null)
  const serviceContainerRef = useRef(null)


  const [activeServiceCard, setActiveServiceCard] = useState(2)
  const [showPricingCard, setShowPricingCard] = useState(false)
  const [showRefCard, setShowRefCard] = useState(false)

  const [serviceBodyHeight, setServiceBodyHeight] = useState(0)

  const handleClick = (idx) => {
    setActiveServiceCard(idx)
    if (window.innerWidth < 768) {
      scrollTo('#services-body')
    }
  }

  useEffect(() => {
    setServiceBodyHeight(serviceRef.current.clientHeight)
  }, [activeServiceCard, showPricingCard, showRefCard])

  // useEffect(() => {
  //   setContainerHeight(serviceContainerRef.current.clientHeight)
  // })

  return (
    <section id='sluzby' className='services-section'>
      <div className='container'>
        <div className={'heading-styles'}
          data-sal="fade"
          data-sal-duration="1500"
          data-sal-easing="ease"
        >
          <h2>Naše služby</h2>
          <div className={"illu-styles"}>
            <Image fluid={wave} />
          </div>
        </div>

        <div className='services-container'>
          <div className='services-header'>
            {
              data.map((service, idx) => (
                <ServiceIcon key={idx} title={service.title} fluid={service.fluid} handleClick={() => handleClick(idx)} />
              ))
            }
          </div>
          <div id='services-body' style={{ height: "10rem" }} />
          <div className='services-body' ref={serviceContainerRef} style={{ height: serviceBodyHeight }}>
            <div className='service' ref={serviceRef}>
              <ServiceDescription desc={data[activeServiceCard].desc} />
              {data[activeServiceCard].pricing && (
                <CustomButton
                  onClick={() => setShowPricingCard(!showPricingCard)}
                >
                  {showPricingCard ? "Skryť cenník" : "Cenník"}
                </CustomButton>
              )}
              {showPricingCard && data[activeServiceCard].pricing && <ServicePricing />}
              {showPricingCard && data[activeServiceCard].pricing && (
                <CustomButton
                  onClick={() => setShowRefCard(!showRefCard)}
                >
                  {showRefCard ? "Skryť referencie" : "Referencie"}
                </CustomButton>
              )}
              {showPricingCard && showRefCard && data[activeServiceCard].pricing && <ServiceRefSlider items={data[activeServiceCard].references} />}
            </div>
          </div>
        </div>

        <div className={'illu-styles-bottom'}>
          <Image fluid={wave} />
        </div>
      </div>

    </section>
  )
}

export default ServicesSection
