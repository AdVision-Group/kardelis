import React, { createContext, useContext } from 'react'
import { HeaderContext } from '../header/header.context'
import { useStaticQuery, graphql } from 'gatsby'

export const FooterContext = createContext({
    logo: null,
    cols: null
})

const FooterProvider = ({ children }) => {
    const { nav } = useContext(HeaderContext)
    const data = useStaticQuery(graphql`
    {
        allImageSharp(filter: {fluid: {originalName: {eq: "logo-old.png"}}}) {
            nodes {
                fluid {
                    ...GatsbyImageSharpFluid_withWebp
                    originalName
                }
            }
        }
    }`
    )

    const logo = data.allImageSharp.nodes[0].fluid
    const cols = {
        sitemap: {
            heading: "Sitemap",
            nav
        },
        services: {
            heading: "Služby",
            links: [
                {
                    link: '#nechty',
                    name: "Nechty",
                },
                {
                    link: '#kozmetika',
                    name: "Kozmetika",
                },
                {
                    link: '#make-up',
                    name: "Make Up",
                },
                {
                    link: '#kadernictvo',
                    name: "Kaderníctvo",
                },
                {
                    link: '#pedikura',
                    name: "Pedikúra",
                }
            ]
        },
        contact: {
            heading: "Kontakt",
            address: {
                rows: [
                    "Bratislavská 13, 900 21",
                    "Svätý Jur, Slovensko",
                    "info@kardelisstudio.sk",
                    "+421 917 306 169"
                ],

            }
        },
        personalInfo: {
            heading: "Osobné údaje",
            links: [
                {
                    name: "Ochrana osobných údajov",
                    slug: '/gdpr'
                },
                {
                    name: "Zmluvné podmienky",
                    slug: "/terms-and-services"
                },
                {
                    name: "Cookies",
                    slug: "/cookies"
                }
            ]
        }
    }

    return (
        <FooterContext.Provider
            value={{
                logo,
                cols
            }}
        >
            {children}
        </FooterContext.Provider>
    )
}

export default FooterProvider