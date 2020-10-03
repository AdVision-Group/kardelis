import React, { useState } from "react"
import { useMenuItems } from '../../hooks/useMenuItems'

import HamMenu from '../hamMenu/hamMenu'
import MenuDrawer from '../mobileDrawer/mobileDrawer'

import { headerStyles, headerContainerStyles } from './header.module.scss'

const Header = () => {
  const [navLinks] = useMenuItems()
  const [showDrawer, setShowDrawer] = useState(false)

  return (
    <React.Fragment>
      <header className={headerStyles}>
        <div className={headerContainerStyles}>
          <div>
            <h1>Logo</h1>
          </div>
          <HamMenu isOpen={showDrawer} handleClick={() => setShowDrawer(!showDrawer)} />
          <nav>
            <ul>
              {navLinks.map(({ name, slug }, idx) => (
                <li key={idx}>
                  <a href={slug}>{name}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      {showDrawer && <MenuDrawer menuItems={navLinks} />}
    </React.Fragment>
  )
}
export default Header
