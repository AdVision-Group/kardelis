import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import scrollTo from 'gatsby-plugin-smoothscroll'
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
    videoContainer,
    headingContainer,
    kStyles,
    ctaStyles
} from "./heroSection.module.scss"

const HeroSection = () => {
    const data = useStaticQuery(graphql`
    {
      imageSharp(fluid: {originalName: {eq: "arrow.png"}}) {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  `)

    return (
        <section
            id={`domov`}
            className={heroStyles}
        >
            <div className={videoContainer}>
                <video
                    className={bgVideoStyles}
                    height="100%"
                    loop
                    muted
                    autoPlay
                    playsInline
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
                <div className={headingContainer}>
                    <h1
                        data-sal="slide-down"
                        data-sal-duration="1500"
                        data-sal-easing="ease"
                    >
                        <span className={kStyles}>
                            K
                        </span>
                        rása sa skladá
                    <span>
                            {' '}z maličkostí
                    </span>
                    </h1>
                </div>


                <button className={ctaStyles} onClick={() => scrollTo('#sluzby')}>
                    <span>
                        Zisti viac
                    </span>
                    <div>
                        <Image fluid={data.imageSharp.fluid} />
                    </div>
                </button>
            </div>
        </section>
    )
}

export default HeroSection
