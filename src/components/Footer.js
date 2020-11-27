import React from 'react'
import styled from 'styled-components'
import keyboard from '../assets/keyboard.svg'
import tea from '../assets/tea.svg'

const FooterTab = styled.div`
    display: flex;
    // flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
    font-size: 1.1rem;
    font-weight: 400;
    color: #222;
    font-family: Rubik, sans-serif;
    img {
        height: 1.7rem;
        width: auto;
    }
`

export default function Footer() {
    return (
        <FooterTab>
            <p>Promptly <span><img src={keyboard} alt="typing..." /></span> with <span><img src={tea} alt="typing..." /></span> by Serhii</p>
        </FooterTab>
    )
}
