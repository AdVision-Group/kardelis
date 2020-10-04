import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import { wrap } from '@popmotion/popcorn'
import { AnimatePresence, motion } from 'framer-motion'

import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

import { sliderContainer, imageContainer, nextStyles, prevStyles, imgStyles, pageBulletsStyles, activeStyles } from './sliderSection.module.scss'

const SliderSection = () => {
    const data = useStaticQuery(graphql`
    {
      allFile(filter: {relativeDirectory: {eq: "slider"}}) {
        nodes {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  `)
    const sliderImages = data.allFile.nodes

    const variants = {
        enter: (direction) => {
            return {
                x: direction > 0 ? 1000 : -1000,
                opacity: 0
            };
        },
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => {
            return {
                zIndex: 0,
                x: direction < 0 ? 1000 : -1000,
                opacity: 0
            };
        }
    };

    const [[page, direction], setPage] = useState([0, 0])

    const imageIndex = wrap(0, sliderImages.length, page);

    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
    };

    return (
        <section id='galeria'>
            <div className={sliderContainer}>
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        className={imageContainer}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit='exit'
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 200 },
                            opacity: { duration: 0.2 }
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = swipePower(offset.x, velocity.x);

                            if (swipe < -swipeConfidenceThreshold) {
                                paginate(1);
                            } else if (swipe > swipeConfidenceThreshold) {
                                paginate(-1);
                            }
                        }}
                    >
                        <Image
                            className={imgStyles}
                            fluid={sliderImages[imageIndex].childImageSharp.fluid}
                        />
                    </motion.div>

                </AnimatePresence>
                <button className={nextStyles} onClick={() => paginate(1)}>
                    <BsArrowRight />
                </button>
                <button className={prevStyles} onClick={() => paginate(-1)}>
                    <BsArrowLeft />
                </button>

                <div className={pageBulletsStyles}>
                    {sliderImages.map((img, idx) => {
                        return (
                            <button className={idx === imageIndex ? activeStyles : " "} key={idx} onClick={() => setPage([idx, idx])}>
                                {" "}
                            </button>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default SliderSection

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
};
