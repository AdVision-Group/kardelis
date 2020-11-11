import React, { useState } from 'react'
import Image from 'gatsby-image'
import { Carousel, CarouselItem, CarouselIndicators, CarouselControl } from 'reactstrap'

import './service-ref-slider.styles.scss'

const ServiceRefSlider = ({ items }) => {
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
        <div id='referencie'>
            <div style={{ height: '8rem' }} />

            <Carousel
                id='galeria'
                activeIndex={activeIndex}
                next={next}
                previous={previous}
                className='service-ref-slider'
            >

                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {items.map((item, idx) => {
                    return (
                        <CarouselItem
                            onExiting={() => setAnimating(true)}
                            onExited={() => setAnimating(false)}
                            key={`${idx}img`}
                        >
                            <Image key={`${idx}image`} fluid={item.childImageSharp.fluid} />
                            {/* <CarouselCaption captionText={item.caption} captionHeader={item.caption} /> */}
                        </CarouselItem>
                    );
                })}
                <CarouselControl className='control left' direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl className='control right' direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
        </div>

    )
}

export default ServiceRefSlider
