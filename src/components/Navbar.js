import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import breakpoint from '../helper'

const Navigation = styled.div`
    position: relative;
    padding: 2rem 10rem;
    border-bottom: 1px solid #D9D9D9;
    color: #111;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media ${breakpoint.device.sm} {
      padding: 0;
  }
`

const Logo = styled.a`
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 2.15rem;
    text-decoration: none;
    span {
        color: #FF715B;
    }
    @media ${breakpoint.device.sm} {
      margin: 1rem;
    }
`

const Menu = styled.ul`
    display: flex;
    list-style: none;
    font-family: 'Rubik', sans-serif;
    font-weight: 500;
    font-size: 1.28rem;
    @media ${breakpoint.device.sm} {
        display: none;
    }
    li {
        padding: 0 1rem;
    }
    a {
        text-decoration: none;
        color: #111111;
    }
`

const MobileMenuButton = styled.div`
    display: none;
    &:hover {
      cursor: pointer;
    }
    
    @media ${breakpoint.device.sm} {
      display: flex;
      margin: 1rem;
  }
`

const MobileMenu = styled.ul`
      position: absolute;
      font-family: Rubik, sans-serif;
      font-size: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      background-color: #FF715B;
      list-style: none;
      li {
        color: #fff;
        padding: 1rem;
        border-bottom: 1px solid #fff;
        &:last-of-type {
          border-bottom: none;
        }
        &:hover {
          background-color: #ff5b42;
          cursor: pointer;
          
        }
        a {
          text-decoration: none;
          color: inherit;
        }
      }
      width: 100%;
      padding-left: 0px;
      top: 75%;
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
    @media ${breakpoint.device.sm} {
        display: none;
    }
`

export default function Navbar() {
    const [burgerMenu, setBurgerMenu] = useState(false);
    function burgerToggle(){
      setBurgerMenu(!burgerMenu);
    }
    const container = useRef();

    function handleClickOutside (event){
      if (container.current && !container.current.contains(event.target)) {
        setBurgerMenu(false);
      }
    };

    useEffect(()=>{
      document.addEventListener("mousedown", handleClickOutside);
    },[])

    return (
            <Navigation ref={container}>
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
               <MobileMenuButton>
                  <i className="fa fa-bars fa-2x" onClick={burgerToggle}></i>
              </MobileMenuButton>
              {burgerMenu ? 
                      <MobileMenu>
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
                      </MobileMenu>
                      :
                      null
                    }
            </Navigation>
    )
}