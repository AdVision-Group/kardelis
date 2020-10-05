import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { useMenuItems } from '../../hooks/useMenuItems'

import { footerStyles, rowStyles, colStyles } from './footer.module.scss'

const Footer = () => {
    const [navLinks] = useMenuItems()
    const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          footerSection {
            cols {
              address {
                rows
              }
              heading
              links {
                link
                name
                slug
              }
            }
          }
        }
      }
    }
  `)

    const { cols } = data.site.siteMetadata.footerSection

    return (
        <footer className={footerStyles}>
            <div className='container'>
                <div className={rowStyles}>
                    <div className={colStyles}>
                        <div>
                            LOGO
                       </div>
                    </div>
                    {cols.map((col, idx) => {
                        return (
                            <div
                                className={colStyles}
                                key={idx}
                                data-sal="fade"
                                data-sal-duration="1500"
                                data-sal-easing="ease"
                                data-sal-delay={`${idx}00`}
                            >
                                <h3>{col.heading}</h3>
                                {idx === 0 && <ul>
                                    {navLinks.map(({ name, slug }, idx) => (
                                        <li key={idx}>
                                            <a href={slug}>{name}</a>
                                        </li>
                                    ))}
                                </ul>}
                                {col.address && <address>
                                    {col.address.rows.map((row, idx) => {
                                        return <p key={idx}>{row}</p>
                                    })}
                                </address>
                                }
                                {col.links && <ul>
                                    {col.links.map(({ link, name, slug }, idx) => {
                                        return (
                                            <li key={idx}>
                                                <a href={link ? link : slug}>{name}</a>
                                            </li>
                                        )
                                    })}
                                </ul>
                                }
                            </div>
                        )
                    })}
                </div>
            </div>
        </footer>
    )
}

export default Footer
