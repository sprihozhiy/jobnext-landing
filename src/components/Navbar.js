import React from 'react';
import styled from 'styled-components';

const Navigation = styled.div`
    padding: 2rem 10rem;
    border-bottom: 1px solid #D9D9D9;
    color: #111111;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Logo = styled.a`
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 2.15rem;
    text-decoration: none;
    span {
        color: #FF715B;
    }
`

const Menu = styled.ul`
    display: flex;
    list-style: none;
    font-family: 'Rubik', sans-serif;
    font-weight: 500;
    font-size: 1.28rem;
    li {
        padding: 0 1rem;
    }
    a {
        text-decoration: none;
        color: #111111;
    }
    @media (max-width: 468px) {
        display: none;
    }
`

const Button = styled.button`
    border: 2px solid #FF715B;
    background-color: #fff;
    font-family: 'Rubik', sans-serif;
    font-weight: 500;
    font-size: 0.95rem;
    padding: 1rem 2rem;
    border-radius: 5px;
    &:hover {
        background-color: #FF715B;
        color: #fff;
        cursor: pointer;
    }
`

export default function Navbar() {
    return (
            <Navigation>
               <div>
                 <Logo><span>Job</span>Next</Logo>  
               </div>
               <Menu>
                   <li>
                       <a href="/">Home</a>
                   </li>
                   <li>
                       <a href="/">About</a>
                   </li>
                   <li>
                       <a href="/">Services</a>
                   </li>
                   <li>
                       <a href="/">Category</a>
                   </li>
                   <li>
                       <a href="/">Blog</a>
                   </li>
                   <li>
                       <a href="/">Contact</a>
                   </li>
               </Menu>
               <div>
                  <Button>Submit Your Resume</Button> 
               </div>
            </Navigation>
    )
}
