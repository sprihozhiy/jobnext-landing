import React from 'react'
import styled from 'styled-components'

const CtaTab = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 3rem 0;
    padding: 3rem 0 5rem;
    background-color: #FF715B;
    font-size: 1rem;
    h4 {
        font-family: Montserrat, sans-serif;
        font-size: 2rem;
        font-weight: 600;
        color: #fff;
    }
    form {
        display: flex;
        justyfy-content: center;
        font-size: 1rem;
        & > * {
            margin: 0 1rem;
        }
        input {
            padding-left: 1rem;
            border: 2px solid #fff;
            font-size: 1rem;
            background: none;
            color: #fff;
            outline: none;
            display: inline-block;
            width: 30rem;
            border-radius: 5px;
            box-sizing: border-box;
            &:focus, &:active {
                background-color: #fff;
                border: 2px solid #fff;
                color: #FF715B;
                padding-left: 1rem;
                &::placeholder {
                    color: #FF715B;
                }
            }
            &::placeholder {
                // padding-left: 1rem;
                color: #fff;
                font-size: 0.95rem;
              }
        }
        button {
            border: 2px solid #fff;
            background: none;
            color: #fff;
            font-family: 'Rubik', sans-serif;
            font-weight: 400;
            font-size: 0.95rem;
            padding: 1rem 2rem;
            border-radius: 5px;
            text-transform: uppercase;
            &:hover {
                background-color: #fff;
                color: #FF715B;
                cursor: pointer;
            }
        }
    }
`

export default function CallToAction() {
    return (
        <CtaTab>
            <h4>Subscribe To Our Newsletter</h4>
            <form>
                <input type="email" placeholder="Enter Your Email" />
                <button>Subscribe</button>
            </form>
        </CtaTab>
    )
}
