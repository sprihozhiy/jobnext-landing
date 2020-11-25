import React from 'react'
import styled from 'styled-components'
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


const TestimTab = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5rem 3rem;
    div {
        height: 30%;
        width: auto;
        position: relative;
        margin: 4rem 0;
        padding: 5rem;
        &.MyCarousel {
            height: 5rem;
            background-color: yellow;
        }
    }
`

export default function Testimonials() {
    return (
        <TestimTab>
            <h4>What Our Customers Say</h4>
            <div>
                <CarouselProvider
                    naturalSlideWidth={1}
                    naturalSlideHeight={1}
                    totalSlides={3}
                    visibleSlides={2}
                    className="MyCarousel"
                >
                    <Slider>
                    <Slide index={0}>I am the first Slide.</Slide>
                    <Slide index={1}>I am the second Slide.</Slide>
                    <Slide index={2}>I am the third Slide.</Slide>
                    </Slider>
                    <DotGroup 
                        disableActiveDots={false}
                    />
                </CarouselProvider>
            </div>
        </TestimTab>
    )
}
