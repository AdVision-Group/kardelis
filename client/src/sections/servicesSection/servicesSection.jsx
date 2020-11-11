import React, { useState, useRef, useEffect, useContext } from 'react'
import Image from 'gatsby-image'
import scrollTo from 'gatsby-plugin-smoothscroll'

import CustomButton from '../../components/button/button'

import { ServicesContext } from '../../contexts/services/services.context'

import SectionHeading from '../../components/section-heading/section-heading.component'

import ServiceIcon from '../../components/service-icon/service-icon.component'
import ServiceDescription from '../../components/service-description/service-description.component'
import ServicePricing from '../../components/service-pricing/service-pricing.component'
import ServiceRefSlider from '../../components/service-ref-slider/service-ref-slider.component'

import './servicesSection.styles.scss'

const ServicesSection = () => {
  const { services, wave } = useContext(ServicesContext)

  const serviceRef = useRef(null)
  const serviceContainerRef = useRef(null)

  const [activeServiceCard, setActiveServiceCard] = useState(null)
  const [showPricingCard, setShowPricingCard] = useState(false)

  const [serviceBodyHeight, setServiceBodyHeight] = useState(0)

  const handleClick = (idx) => {
    setActiveServiceCard(idx)
    setShowPricingCard(false)
    if (window.innerWidth < 768) {
      scrollTo('#services-body')
    }
  }

  const handlePricingButtonClick = () => {
    setShowPricingCard(!showPricingCard)
  }

  useEffect(() => {
    if (showPricingCard) {
      setTimeout(() => {
        scrollTo('#cennik')
      }, 1000)
    }
  }, [showPricingCard])

  useEffect(() => {
    setServiceBodyHeight(serviceRef.current.clientHeight)
  }, [activeServiceCard, showPricingCard])


  return (
    <section id='sluzby' className='services-section'>
      <div className='container'>
        <SectionHeading title='Naše služby' />

        <div className='services-container'>
          <div className='services-header'>
            {
              services.map((service, idx) => (
                <ServiceIcon key={idx} title={service.title} fluid={service.img.childImageSharp.fluid} handleClick={() => handleClick(idx)} active={idx === activeServiceCard} />
              ))
            }
          </div>
          <div id='services-body' style={{ height: "10rem" }} />
          <div className='services-body' ref={serviceContainerRef} style={{ height: serviceBodyHeight }}>
            <div className='service' ref={serviceRef}>
              {activeServiceCard !== null && <ServiceDescription desc={services[activeServiceCard].desc} heading={services[activeServiceCard].heading} />}
              {activeServiceCard !== null && services[activeServiceCard].pricing && (
                <CustomButton onClick={handlePricingButtonClick}>
                  {showPricingCard ? "Skryť cenník a refecenzie" : "Cenník a referencie"}
                </CustomButton>
              )}
              {showPricingCard && services[activeServiceCard].pricing && <ServicePricing pricing={services[activeServiceCard].pricing} />}

              {showPricingCard && services[activeServiceCard].pricing && <ServiceRefSlider items={services[activeServiceCard].references} />}
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
