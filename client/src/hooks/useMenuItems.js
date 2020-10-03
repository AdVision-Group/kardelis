import { useState, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'


export const useMenuItems = () => {
    const [value, setValue] = useState([])
    const data = useStaticQuery(graphql`
    {
        site {
            siteMetadata {
                header {
                    nav {
                        name
                        slug
                    }
                }
            }
        }
    }
    `)

    useEffect(() => {
        setValue(data.site.siteMetadata.header.nav)
    }, [data])


    return [value, setValue]
}