import React, { useState, useEffect, useContext } from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'
import Image from 'gatsby-image'
import scrollTo from 'gatsby-plugin-smoothscroll';
import { HeaderContext } from '../../contexts/header/header.context'

import HamMenu from '../hamMenu/hamMenu'
import MenuDrawer from '../mobileDrawer/mobileDrawer'


import { headerStyles, headerStylesActive, headerContainerStyles, logoStyles, logoStylesActive, headerContainerStylesActive } from './header.module.scss'

const Header = () => {
  const data = useStaticQuery(graphql`{
  allImageSharp(filter: {fluid: {originalName: {eq: "logo.png"}}}) {
    nodes {
      fluid {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
  `)
  const { nav } = useContext(HeaderContext)
  const [showDrawer, setShowDrawer] = useState(false)
  const [showNav, setShowNav] = useState(false)

  useEffect(() => {
    if (window.pageYOffset > 90) {
      setShowNav(true)
    }
  }, [])

  useEffect(() => {
    window.onscroll = () => {
      let currentScrollPos = window.pageYOffset;
      if (currentScrollPos > 70) {
        setShowNav(true)
      } else {
        if (currentScrollPos <= 0) return
        setShowNav(false)
      }
    }
  })


  return (
    <React.Fragment>
      <header
        className={showNav ? headerStylesActive : headerStyles}
      >
        <div className={showNav ? headerContainerStylesActive : headerContainerStyles}>
          <div className={showNav ? logoStylesActive : logoStyles}>
            <Link to="/">
              <Image fluid={data.allImageSharp.nodes[0].fluid} />
            </Link>
          </div>
          <HamMenu isOpen={showDrawer} handleClick={() => setShowDrawer(!showDrawer)} />
          <nav>
            <ul>
              {nav.map(({ name, slug }, idx) => (
                <li key={idx}>
                  <button onClick={() => scrollTo(slug)}>{name}</button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <MenuDrawer showNav={showNav} menuItems={nav} setShowDrawer={setShowDrawer} showDrawer={showDrawer} />
    </React.Fragment>
  )
}
export default Header
