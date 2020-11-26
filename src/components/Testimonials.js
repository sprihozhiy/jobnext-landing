import React from 'react'
import styled from 'styled-components'
import Slider from 'infinite-react-carousel'
import dots from '../assets/dots.svg'
import testimonial1 from '../assets/testimonial1.svg'
import testimonial2 from '../assets/testimonial2.svg'
import quotes from '../assets/quotes.svg'

const TestimTab = styled.div`
        display: flex;
        flex-direction: column;
        padding: 5rem 3rem;
        background-image: url(${dots});
        background-repeat: no-repeat;
        background-position: 1% 35%;
    &> h4 {
        font-family: Montserrat, sans-serif;
        font-weight: 600;
        font-size: 2.1rem;
        text-align: center;
        padding: 0 0 3rem 0;
    }
    .myCarousel {
        .testimonialCard {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            img {
                display: inline-block;
            }
            .cardWrapper {
                background-color: white;
                margin: 35px;
                box-shadow: 0 0.9rem 1.2rem rgba(153, 153, 153, 0.2);
                border-radius: 10px;
                padding: 10px;
                background-image: url(${quotes});
                background-repeat: no-repeat;
                background-position: 10% 10%;
            }
        }
    }
    
`

export default function Testimonials() {
    const settings =  {
        arrows: false,
        arrowsBlock: false,
        centerPadding: 30,
        dots: true,
        slidesToShow: 2
      };

    return (
        <TestimTab>
            <h4>What Our Customers Say</h4>
            <div>
                <Slider { ...settings } className="myCarousel">
                    <div className="testimonialCard">
                        <div className="cardWrapper">
                            <img src={testimonial1} alt="Testimonial" />
                            <h5>John Doe</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu blandit quam, non porttitor ante. Donec ac scelerisque neque. Aliquam pulvinar tellus risus, sed maximus purus efficitur ut. In sit amet gravida nisl.</p>

                        </div>
                    </div>
                    <div className="testimonialCard">
                        <div className="cardWrapper">
                            <img src={testimonial2} alt="Testimonial" />
                            <h5>Megan Fox</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu blandit quam, non porttitor ante. Donec ac scelerisque neque. Aliquam pulvinar tellus risus, sed maximus purus efficitur ut. In sit amet gravida nisl.</p>
                        </div>
                    </div>
                    <div className="testimonialCard">
                        <div className="cardWrapper">
                            <img src={testimonial1} alt="Testimonial" />
                            <h5>John Doe</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu blandit quam, non porttitor ante. Donec ac scelerisque neque. Aliquam pulvinar tellus risus, sed maximus purus efficitur ut. In sit amet gravida nisl.</p>

                        </div>
                    </div>
                    <div className="testimonialCard">
                        <div className="cardWrapper">
                            <img src={testimonial2} alt="Testimonial" />
                            <h5>Megan Fox</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu blandit quam, non porttitor ante. Donec ac scelerisque neque. Aliquam pulvinar tellus risus, sed maximus purus efficitur ut. In sit amet gravida nisl.</p>
                        </div>
                    </div>
                </Slider>
            </div>
        </TestimTab>
    )
}
