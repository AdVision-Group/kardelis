import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import BackgroundImage from 'gatsby-background-image'

import { FaFacebook, FaInstagram } from 'react-icons/Fa'

import { heroStyles, logoStyles, socialStyles } from "./heroSection.module.scss"

const HeroSection = ({ data }) => {
    const query = useStaticQuery(graphql`
    {
    allFile(filter: {childImageSharp: {fluid: {originalName: {eq: "bg_img.jpg"}}}}) {
        nodes {
        childImageSharp {
            fluid {
            ...GatsbyImageSharpFluid_withWebp
            }
        }
        }
    }
    allImageSharp(filter: {fluid: {originalName: {eq: "logo.png"}}}) {
        nodes {
        fluid {
            ...GatsbyImageSharpFluid_withWebp
        }
        }
    }
    }
    `)
    const { heading, social } = data
    const bgImg = query.allFile.nodes[0].childImageSharp.fluid
    const logoImg = query.allImageSharp.nodes[0].fluid

    return (
        <BackgroundImage
            Tag={`section`}
            id={`domov`}
            className={heroStyles}
            fluid={bgImg}
        >
            <div className={logoStyles}
                data-sal="fade"
                data-sal-duration="1500"
                data-sal-easing="ease"
            >
                <Image fluid={logoImg} />
            </div>

            <h1
                data-sal="slide-down"
                data-sal-duration="1500"
                data-sal-easing="ease"
            >{heading}</h1>
            <div
                className={socialStyles}
                data-sal="slide-down"
                data-sal-duration="1500"
                data-sal-easing="ease"
            >
                {social.map(({ name, link }, idx) => {
                    if (name === 'Facebook') {
                        return (
                            <div key={idx}>
                                <a href={link}>
                                    <FaFacebook />
                                </a>
                            </div>
                        )
                    } else {
                        return (
                            <div key={idx}>
                                <a href={link}>
                                    <FaInstagram />
                                </a>
                            </div>
                        )
                    }
                })}
            </div>
        </BackgroundImage>
    )
}

export default HeroSection
