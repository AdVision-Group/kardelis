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

const ServicesSection = ({ wave }) => {
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
    sliderImages: allFile(filter: {relativeDirectory: {eq: "slider"}}) {
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

  const services = [
    {
      img: "nechty.png",
      title: "Nechty",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nulla facilisi morbi tempus. Elit ut aliquam purus sit amet luctus venenatis. Pellentesque habitant morbi tristique senectus et. Augue ut lectus arcu bibendum at varius. Leo a diam"
    },
    {
      img: "kozmetika.png",
      title: "Kozmetika",
      desc: "Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini."
    },
    {
      img: "make-up.png",
      title: "Make Up",
      desc: "Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip. Sea lettuce lettuce water chestnut eggplant winter purslane fennel azuki bean earthnut pea sierra leone bologi leek soko chicory celtuce parsley jï¿½cama salsify."
    },
    {
      img: "kaderníctvo.png",
      title: "Kadernictvo",
      desc: "Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini."
    },
    {
      img: "pedikúra.png",
      title: "Pedikura",
      desc: "Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip. Sea lettuce lettuce water chestnut eggplant winter purslane fennel azuki bean earthnut pea sierra leone bologi leek soko chicory celtuce parsley jï¿½cama salsify."
    }
  ]

  const images = data.images.nodes

  const servicesWithImages = services.map((service) => {
    const img = images.filter(image => {
      return service.img === image.childImageSharp.fluid.originalName
    })

    return {
      fluid: img[0].childImageSharp.fluid,
      ...service
    }
  })

  const items = data.sliderImages.nodes.map((img, idx) => {
    return {
      key: idx,
      ...img
    }
  })

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

          {servicesWithImages.map(({ title, fluid }, idx) => {
            return (
              <div key={idx} className={serviceStyles}
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

          {services.map(({ desc }, idx) => {
            return (
              <div
                key={idx}
                ref={activeCard === idx ? pricingRef : null}
                className={activeCard === idx ? pricingStylesActive : pricingStyles}
              >
                Pricing
              </div>
            )
          })}

          <button onClick={handleShowRef}>
            {showRef ? "Skryť referencie" : "Referencie"}
          </button>

          {/* REFERENCE CONTAINER */}


          {services.map(({ desc }, idx) => {
            return (
              <div
                key={idx}
                ref={activeCard === idx ? referenceRef : null}
                className={activeCard === idx ? refStylesActive : refStyles}
              >
                <CustomSlider items={items} />
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
