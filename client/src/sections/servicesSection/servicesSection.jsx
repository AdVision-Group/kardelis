import React, { useState } from 'react'
import Image from 'gatsby-image'
import scrollTo from 'gatsby-plugin-smoothscroll'

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
  serviceImgStylesActive
} from './servicesSection.module.scss'

const ServicesSection = ({ wave }) => {
  const services = [
    {
      title: "Lorem ipsum",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nulla facilisi morbi tempus. Elit ut aliquam purus sit amet luctus venenatis. Pellentesque habitant morbi tristique senectus et. Augue ut lectus arcu bibendum at varius. Leo a diam"
    },
    {
      title: "Lorem ipsum",
      desc: "Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini."
    },
    {
      title: "Lorem ipsum",
      desc: "Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip. Sea lettuce lettuce water chestnut eggplant winter purslane fennel azuki bean earthnut pea sierra leone bologi leek soko chicory celtuce parsley jï¿½cama salsify."
    }
  ]

  const [activeCard, setActiveCard] = useState(1)
  const handleClick = (idx) => {
    setActiveCard(idx)
    scrollTo('#popis-sluzieb')
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

          {services.map(({ title }, idx) => {
            return (
              <div key={idx} className={serviceStyles}
                data-sal="fade"
                data-sal-duration="1500"
                data-sal-easing="ease"
                data-sal-delay={`${idx}00`}
              >
                <button className={activeCard === idx ? serviceImgStylesActive : serviceImgStyles} onClick={() => handleClick(idx)}>
                  {" "}
                </button>
                <h3>{title}</h3>
              </div>
            )
          })}
        </div>

        <div id="popis-sluzieb" className={descriptionStyles}>
          {services.map(({ desc }, idx) => {
            return (
              <p key={idx} className={activeCard === idx ? descStylesActive : descStyles}>
                {desc}
              </p>
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
