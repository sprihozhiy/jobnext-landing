import React from 'react'
import styled from 'styled-components'
import breakpoint from '../helper'

const CtaTab = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 3rem 0 1.5rem;
    padding: 3rem 0 6rem;
    background-color: #FF715B;
    font-size: 1rem;
    h4 {
        font-family: Montserrat, sans-serif;
        font-size: 2rem;
        font-weight: 600;
        color: #fff;
        @media ${breakpoint.device.sm} {
            font-size: 1.5rem;
            padding: 0 0.3rem;
        }
    }
    form {
        display: flex;
        justyfy-content: center;
        font-size: 1rem;
        & > * {
            margin: 0 1rem;
            @media ${breakpoint.device.sm} {
                margin: 0.5rem 0.2rem;
            }
        }
        @media ${breakpoint.device.sm} {
            flex-direction: column;
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
            @media ${breakpoint.device.sm} {
                width: 100%;
                font-size: 1.2rem;
                padding-top: 0.5rem;
                padding-bottom: 0.5rem;
            }
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
            @media ${breakpoint.device.sm} {
                padding: 0.5rem 0;
                width: 100%;
            }
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
