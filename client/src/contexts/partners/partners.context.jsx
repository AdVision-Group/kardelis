import React, { createContext } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export const PartnersContext = createContext({
    heading: "",
    partners: []
})

const PartnersProvider = ({ children }) => {
    const { allFile: { nodes: images } } = useStaticQuery(graphql`
    {
        allFile(filter: {relativeDirectory: {eq: "partners"}}) {
            nodes {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid_withWebp
                    originalName
                }
            }
            }
        }
        }
    `)
    const heading = 'Partneri, s ktorými spolupracujeme'

    const partners = [
        {
            img: images.find(img => img.childImageSharp.fluid.originalName === "logo-elissa-beaute.png"),
            name: "alissa beauté",
            // link: "https://www.google.com"
        },
        {
            img: images.find(img => img.childImageSharp.fluid.originalName === "logo-essente.png"),
            name: "essente | inspirace",
            // link: "https://www.google.com"
        },
        {
            img: images.find(img => img.childImageSharp.fluid.originalName === "logo-orly.png"),
            name: "ORLY",
            // link: "https://www.google.com"
        }
    ]

    return (
        <PartnersContext.Provider
            value={{
                heading,
                partners
            }}
        >
            {children}
        </PartnersContext.Provider>
    )
}

export default PartnersProvider