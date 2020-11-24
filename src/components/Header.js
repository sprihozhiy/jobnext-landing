import React from 'react'
import styled from 'styled-components';
import hero from '../hero.svg';


const Jumbotron = styled.div`
        background-image: url(${hero});
        background-position: 120% 70%;
        background-repeat: no-repeat;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        padding: 2rem 10rem;
        
        div { 
            width: 60%;
            font-size: 1rem;
        }

        h4 {
            text-transform: uppercase;
            font-family: Rubik, sans-serif;
            font-weight: 500;
            font-size: 1.15rem;
            margin: 0.9rem 0;
        }
        h1 {
            font-size: 4.35rem;
            font-family: Montserrat, sans-serif;
            font-weight: 800;
            margin: 0.9rem 0;
        }
        p {
            font-size: 1.05rem;
            font-family: Rubik, sans-serif;
            font-weight: 400;
            margin: 0.9rem 0;
        }

        button {
            display: inline-block;
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
    `

export default function Header() {
    
    return (
        <Jumbotron>
            <div>
               <h4>THE MOST POWEFULL SOLUTIONS</h4>
               <h1>Build Your Career With JobNext</h1>
               <p>Veritatis earum aliquid doloribus molestias, eveniet molestiae aperiam ratione. Facilis velit voluptatibus impedit eligendi delectus illo earum voluptatum, laudantium molestiae!</p>  
               <button>Search Job by Category</button> 
            </div>
        </Jumbotron>
    )
}
