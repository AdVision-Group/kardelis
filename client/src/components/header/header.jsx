import React from "react"
import { useMenuItems } from '../../hooks/useMenuItems'

const Header = () => {
  const [navLinks] = useMenuItems()

  return (
    <header>
      <div>
        <h1>Logo</h1>
      </div>
      <nav>
        <ul>
          {
            navLinks.map(({ name, slug }, idx) => (
              <li key={idx}>
                <a href={slug}>{name}</a>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  )
}
export default Header
