import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import { Carousel, CarouselItem, CarouselIndicators, CarouselControl } from 'reactstrap'

import { sliderStyles, galleryStyles, controlsStyles } from './sliderSection.module.scss'

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
    const items = data.allFile.nodes.map((img, idx) => {
        return {
            key: idx,
            ...img
        }
    })

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }


    return (
        <section id='galeria' className={sliderStyles}>
            <Carousel
                id='galeria'
                activeIndex={activeIndex}
                next={next}
                previous={previous}
                className={galleryStyles}
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {items.map((item, idx) => {
                    return (
                        <CarouselItem
                            onExiting={() => setAnimating(true)}
                            onExited={() => setAnimating(false)}
                            key={idx}
                        >
                            <Image key={idx} fluid={item.childImageSharp.fluid} />
                            {/* <CarouselCaption captionText={item.caption} captionHeader={item.caption} /> */}
                        </CarouselItem>
                    );
                })}
                <CarouselControl className={controlsStyles} direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl className={controlsStyles} direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
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
