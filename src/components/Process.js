import React from 'react'
import styled from 'styled-components'
import breakpoint from '../helper'
import process1 from '../assets/process_1.svg'
import process2 from '../assets/process_2.svg'

const ProcessTab = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    padding: 4rem;
    @media ${breakpoint.device.sm} { 
        padding: 0.5rem; 
      }   
    div {
        display: flex;
        flex-direction: column;
        @media ${breakpoint.device.lg} {
            flex-direction: row;
        }
        div {
            display: flex;
            flex-direction: column;
            margin: 0 5rem;
            justify-content: center;
            font-size: 1rem;
            @media ${breakpoint.device.sm} {
                margin: 1.2rem; 
            }   
        }
        img {
            display: inline-block;
            box-sizing: border-box;
            @media ${breakpoint.device.sm} {
                width: 100%;
                height: auto; 
            }   
        }
        .reverse {
            order: 2;
            @media ${breakpoint.device.sm} {
                order: 0; 
              }   
        }
        & h4 {
            font-size: 2.5rem;
            color: #222;
            margin: 0.7rem 0;
        }
        & > h4 > small {
            display: block;
            font-family: Montserrat, sans-serif;
            font-weight: 400;
            font-size: 1.5rem;
            margin: 0;
        }
        & p {
            font-family: Rubik, sans-serif;
            font-size: 1rem;
            color: #575757;
            margin: 0.5rem 0;
        }
        & button {
            display: inline-block;
            width: 12rem;
            height: auto;
            background-color: #FF715B;
            border: 1px solid #FF715B;
            border-radius: 5px;
            font-family: Rubik, sans-serif;
            font-weight: 500;
            color: #fff;
            padding: 1rem 3rem;
            font-size: 1rem;
            margin: 0.9rem 0;
            &:hover {
                background-color: #fff;
                color: #FF715B;
                cursor: pointer;
            }
        }
    }
`

export default function Process() {
    return (
        <ProcessTab>
            <div>
                <img src={process1} alt="Our Process" />
                <div>
                    <h4><small>The Process</small>About Our Work</h4>
                    <p>Lorem ipsum dolor sit amet, vel accumsan liberavisse ex, ea nec 
    elaboraret interpretaris, sed diceret concludaturque ndo. Verear 
    habemus sea ut. His nibh scripta in. In sea vocibus facilisis. Sed</p>
                    <p>vel cu paulo doctus vidisse. Iudico dicant nostrum nec an, in eos
    In detraxit eleifend duo, alterum iudicabit consectetuer per ad.</p>
                    <button>Know More</button>   
                </div>
            </div>
            <div>    
                <img src={process2} alt="Progress Updates" className="reverse"/>
                <div>
                    <h4><small>Get Updated</small>About Our Progress</h4>
                    <p>Lorem ipsum dolor sit amet, vel accumsan liberavisse ex, ea nec 
    elaboraret interpretaris, sed diceret concludaturque ndo. Verear 
    habemus sea ut. His nibh scripta in. In sea vocibus facilisis. Sed</p>
                    <p>vel cu paulo doctus vidisse. Iudico dicant nostrum nec an, in eos
    In detraxit eleifend duo, alterum iudicabit consectetuer per ad.</p>
                    <button>Know More</button>
                </div>
            </div>
        </ProcessTab>
        
    )
}
