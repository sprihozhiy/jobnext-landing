import React from 'react'
import styled from 'styled-components'
import breakpoint from '../helper'
import icon1 from '../assets/icon_result_1.svg';
import icon2 from '../assets/icon_result_2.svg';
import icon3 from '../assets/icon_result_3.svg';

const ResultsTab = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    font-family: Open-Sans, sans-serif;
    color: #5E57A7;
    justify-content: center;
    &>div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        width: 20rem;
        height: 16rem;
        border-radius: 1.4rem;
        box-shadow: 0 10px 30px rgba(153,153,153,0.20);
        margin: 3rem 1.5rem;
        @media ${breakpoint.device.xs} {
            width: auto; 
        }   
        div {
            text-align: center;
        }
        div > h4 {
            font-weight: 800;
            font-size: 1.2rem;
            margin-bottom: 0;
        }
        div > p {
            font-weight: 400;
            margin: 0.2rem;
            text-transform: uppercase;
        }
    }
`

export default function Results() {
    return (
        <ResultsTab>
            <div>
                <img src={icon1} alt="icon" />
                  <div>
                     <h4>15,000</h4>
                     <p>People gets perfect jobs</p>
                  </div>  
            </div>
            <div>
                <img src={icon2} alt="icon" />
                <div>
                  <h4>80,000</h4>
                  <p>Candidates calls monthly</p>  
                </div>
            </div>
            <div>
                <img src={icon3} alt="icon" />
                <div>
                  <h4>25,000</h4>
                  <p>Jobs posted monthly</p>  
                </div>
            </div>
        </ResultsTab>
    )
}
