import React, { useState, useRef, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import scrollTo from 'gatsby-plugin-smoothscroll'
import CustomSlider from '../../components/slider/slider'

import {
  servicesStyles,
  illuStyles,
  headingStyles,
  illuStylesBottom,
  serviceImgStyles,
  serviceStyles,
  servicesContainerStyles,
  descriptionStyles,
  descStyles,
  descStylesActive,
  serviceImgStylesActive,
  pricingStylesActive,
  pricingStyles,
  refStylesActive,
  refStyles
} from './servicesSection.module.scss'

const ServicesSection = ({ wave, data: services }) => {
  const data = useStaticQuery(graphql`
  {
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

  const images = data.images.nodes

  const servicesWithImages = services.map((service) => {
    const img = images.filter(image => {
      return service.img === image.childImageSharp.fluid.originalName
    })

    if (service.id === 'nechty') {
      return {
        fluid: img[0].childImageSharp.fluid,
        references: data.nechtyImages.nodes.map((img, idx) => {
          return {
            key: idx,
            ...img
          }
        }),
        ...service
      }
    }
    if (service.id === 'kozmetika') {
      return {
        fluid: img[0].childImageSharp.fluid,
        references: data.kozmetikaImages.nodes.map((img, idx) => {
          return {
            key: idx,
            ...img
          }
        }),
        ...service
      }
    }
    if (service.id === 'make-up') {
      return {
        fluid: img[0].childImageSharp.fluid,
        references: data.makeupImages.nodes.map((img, idx) => {
          return {
            key: idx,
            ...img
          }
        }),
        ...service
      }
    }

    return {
      fluid: img[0].childImageSharp.fluid,
      references: [],
      ...service
    }
  })

  // console.log(servicesWithImages)

  const [activeCard, setActiveCard] = useState(2)
  const handleClick = (idx) => {
    setActiveCard(idx)
    scrollTo('#popis-sluzieb')
  }

  const [showPricing, setShowPricing] = useState(false)
  const [showRef, setShowRef] = useState(false)

  const [containerHeight, setContainerHeight] = useState(0)
  const pricingButtonRef = useRef(null)
  const descContainerRef = useRef(null)
  const paragraphRef = useRef(null)
  const pricingRef = useRef(null)
  const referenceRef = useRef(null)

  useEffect(() => {
    setContainerHeight(paragraphRef.current.offsetHeight + pricingButtonRef.current.offsetHeight + 84)
    if (showPricing) {
      setContainerHeight(paragraphRef.current.offsetHeight + pricingRef.current.offsetHeight + 250)
      if (showRef) {
        setContainerHeight(paragraphRef.current.offsetHeight + pricingRef.current.offsetHeight + referenceRef.current.offsetHeight + 300)
      }
    }

  }, [activeCard, containerHeight, showPricing, showRef])

  const handleShowPricing = () => {
    if (pricingRef.current) {
      setContainerHeight(containerHeight + pricingRef.current.offsetHeight)
    } else {
      setContainerHeight(paragraphRef.current.offsetHeight)
    }
    if (showPricing) {
      setShowRef(false)
    }
    setShowPricing(!showPricing)
  }

  const handleShowRef = () => {
    if (referenceRef.current) {
      setContainerHeight(containerHeight + referenceRef.current.offsetHeight)
    } else {
      setContainerHeight(paragraphRef.current.offsetHeight)
    }
    setShowRef(!showRef)
  }


  return (
    <section id='sluzby' className={servicesStyles}>
      <div className='container'>
        <div className={headingStyles}
          data-sal="fade"
          data-sal-duration="1500"
          data-sal-easing="ease"
        >
          <h2>Naše služby</h2>
          <div className={illuStyles}>
            <Image fluid={wave} />
          </div>
        </div>

        <div className={servicesContainerStyles}>

          {servicesWithImages.map(({ title, fluid, id }, idx) => {
            return (
              <div id={id} key={idx} className={serviceStyles}
                data-sal="fade"
                data-sal-duration="1500"
                data-sal-easing="ease"
                data-sal-delay={`${idx}00`}
              >

                <button className={activeCard === idx ? serviceImgStylesActive : serviceImgStyles} onClick={() => handleClick(idx)}>
                  <Image fluid={fluid} />
                </button>
                <h3>{title}</h3>
              </div>
            )
          })}
        </div>

        <div ref={descContainerRef} id="popis-sluzieb" className={descriptionStyles} style={{ height: containerHeight }}>
          {services.map(({ desc }, idx) => {
            return (
              <p
                key={idx}
                ref={activeCard === idx ? paragraphRef : null}
                className={activeCard === idx ? descStylesActive : descStyles}
              >
                {desc}
              </p>
            )
          })}

          <button ref={pricingButtonRef} onClick={handleShowPricing} >
            {showPricing ? "Skryť cenník" : "Cenník"}
          </button>


          {/* PRICING CONTAINER */}
          {servicesWithImages[activeCard].references.length > 0 ?
            services.map(({ desc }, idx) => {
              return (
                <div
                  key={idx}
                  ref={activeCard === idx ? pricingRef : null}
                  className={activeCard === idx ? pricingStylesActive : pricingStyles}
                >
                  Pricing
                </div>
              )
            }) :
            services.map(({ desc }, idx) => {
              return (
                <div
                  key={idx}
                  ref={activeCard === idx ? pricingRef : null}
                  className={activeCard === idx ? pricingStylesActive : pricingStyles}
                >
                  Pripravujeme..
                </div>
              )
            })
          }

          {servicesWithImages[activeCard].references.length > 0 ?
            (<button onClick={handleShowRef} >
              {showRef ? "Skryť referencie" : "Referencie"}
            </button>
            ) : (<button onClick={handleShowRef} style={{ visibility: "hidden" }} >
              {showRef ? "Skryť referencie" : "Referencie"}
            </button>
            )
          }

          {/* REFERENCE CONTAINER */}


          {services.map(({ desc }, idx) => {
            return (
              <div
                key={idx}
                ref={activeCard === idx ? referenceRef : null}
                className={activeCard === idx ? refStylesActive : refStyles}
              >
                <CustomSlider height="100vh" items={servicesWithImages[activeCard].references} />
              </div>
            )
          })}
        </div>


        <div className={illuStylesBottom}>
          <Image fluid={wave} />
        </div>
      </div>

    </section>
  )
}

export default ServicesSection
