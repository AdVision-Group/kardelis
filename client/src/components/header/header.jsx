import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'
import Image from 'gatsby-image'
import scrollTo from 'gatsby-plugin-smoothscroll';
import { useMenuItems } from '../../hooks/useMenuItems'

import HamMenu from '../hamMenu/hamMenu'
import MenuDrawer from '../mobileDrawer/mobileDrawer'

import { headerStyles, headerContainerStyles, logoStyles } from './header.module.scss'

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

  const [navLinks] = useMenuItems()
  const [showDrawer, setShowDrawer] = useState(false)

  return (
    <React.Fragment>
      <header
        className={headerStyles}
        data-sal="slide-down"
        data-sal-duration="1500"
        data-sal-easing="ease"
      >
        <div className={headerContainerStyles}>
          <div className={logoStyles}>
            <Link to="/">
              <Image fluid={data.allImageSharp.nodes[0].fluid} />
            </Link>
          </div>
          <HamMenu isOpen={showDrawer} handleClick={() => setShowDrawer(!showDrawer)} />
          <nav>
            <ul>
              {navLinks.map(({ name, slug }, idx) => (
                <li key={idx}>
                  <button onClick={() => scrollTo(slug)}>{name}</button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <MenuDrawer menuItems={navLinks} setShowDrawer={setShowDrawer} showDrawer={showDrawer} />
    </React.Fragment>
  )
}
export default Header
