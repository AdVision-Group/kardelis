import React, { createContext } from 'react'

export const HeaderContext = createContext({
    nav: []
})

const HeaderProvider = ({ children }) => {
    const nav = [
        {
            name: "Domov",
            slug: "#domov"
        },
        {
            name: "Služby",
            slug: "#sluzby"
        },
        {
            name: "Partneri",
            slug: "#partneri"
        },

        {
            name: "Galéria",
            slug: "#galeria"
        },
        {
            name: "Kontakt",
            slug: "#kontakt"
        }
    ]

    return (
        <HeaderContext.Provider value={{ nav }}>
            {children}
        </HeaderContext.Provider>
    )
}

export default HeaderProvider