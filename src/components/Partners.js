import React from 'react'
import styled from 'styled-components'
import partners from '../assets/partners.svg';
import breakpoint from '../helper'

const PartnersTab = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2rem;
    font-size: 1rem;
    h4 {
        font-family: Montserrat, sans-serif;
        font-size: 2rem;
        font-weight: 600;
        color: #111;
        padding: 0 0 3rem 0;
    }
    img {
        display: block;
        @media ${breakpoint.device.sm} {
            width: 100%;
        }
    }
`

export default function Partners() {
    return (
        <PartnersTab>
            <h4>Our Partners</h4>
            <img src={partners} alt="Our Partners" />
        </PartnersTab>
    )
}
