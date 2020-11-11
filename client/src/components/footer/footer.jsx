import React, { useContext } from 'react'
import { Link } from 'gatsby'
import scrollTo from 'gatsby-plugin-smoothscroll'
import Image from 'gatsby-image'
import { FooterContext } from '../../contexts/footer/footer.context'

import { footerStyles, rowStyles, colStyles } from './footer.module.scss'

const Footer = () => {
    const { logo, cols: { sitemap, services, contact, personalInfo } } = useContext(FooterContext)

    return (
        <footer className={footerStyles}>
            <div className='container'>
                <div className={rowStyles}>
                    <div className={colStyles}>
                        <div>
                            <Image fluid={logo} alt={logo.originalName} />
                        </div>
                    </div>
                    <div className={colStyles}>
                        <h3>{sitemap.heading}</h3>
                        <ul>
                            {sitemap.nav.map(({ name, slug }, idx) => (
                                <li key={idx}>
                                    <button onClick={() => scrollTo(slug)}>{name}</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={colStyles}>
                        <h3>{services.heading}</h3>
                        <ul>
                            {services.links.map(({ link, name }, idx) => (
                                <li key={idx}>
                                    <button onClick={() => scrollTo('#sluzby')}>{name}</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={colStyles}>
                        <h3>{contact.heading}</h3>
                        <address>
                            {contact.address.rows.map((row, idx) => {
                                return <p key={idx}>{row}</p>
                            })}
                        </address>

                    </div>
                    <div className={colStyles}>
                        <h3>{personalInfo.heading}</h3>
                        <ul>
                            {personalInfo.links.map(({ slug, name }, idx) => (
                                <li key={idx}>
                                    <Link to={slug}>{name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
