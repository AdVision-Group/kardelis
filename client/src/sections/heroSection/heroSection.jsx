import React from 'react'
// import { useStaticQuery, graphql } from 'gatsby'
// import Image from 'gatsby-image'

// import Video from '../../components/video/video'
import bgVideo from '../../images/landing-page-video.mp4'

// import { FaFacebook, FaInstagram } from 'react-icons/fa'
import {
    heroStyles,
    // logoStyles,
    // socialStyles,
    bgVideoStyles,
    bgOverlay,
    contentStyles,
    videoContainer
} from "./heroSection.module.scss"

const HeroSection = ({ data }) => {
    // const query = useStaticQuery(graphql`
    // {
    // allImageSharp(filter: {fluid: {originalName: {eq: "logo.png"}}}) {
    //     nodes {
    //     fluid {
    //         ...GatsbyImageSharpFluid_withWebp
    //     }
    //     }
    // }
    // }
    // `)
    const {
        heading,
        // social
    } = data
    // const logoImg = query.allImageSharp.nodes[0].fluid

    return (
        <section
            id={`domov`}
            className={heroStyles}
        >
            <div className={videoContainer}>
                <video
                    className={bgVideoStyles}
                    height="100%"
                    // width="100%"
                    loop
                    muted
                    autoPlay
                >
                    <source
                        src={bgVideo}
                        type="video/mp4"
                    />
                </video>

            </div>

            <div className={bgOverlay}>

            </div>

            <div className={contentStyles}>

                {/* <div className={logoStyles}
                    data-sal="fade"
                    data-sal-duration="1500"
                    data-sal-easing="ease"
                >
                    <Image fluid={logoImg} />
                </div> */}

                <h1
                    data-sal="slide-down"
                    data-sal-duration="1500"
                    data-sal-easing="ease"
                >{heading}</h1>
                {/* <div
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
                </div> */}
            </div>
        </section>
    )
}

export default HeroSection
