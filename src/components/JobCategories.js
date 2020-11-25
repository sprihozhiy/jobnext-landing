import React from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid';
import jobicon1 from '../assets/job-icons/1.svg'
import jobicon2 from '../assets/job-icons/2.svg'
import jobicon3 from '../assets/job-icons/3.svg'
import jobicon4 from '../assets/job-icons/4.svg'
import jobicon5 from '../assets/job-icons/5.svg'
import jobicon6 from '../assets/job-icons/6.svg'
import jobicon7 from '../assets/job-icons/7.svg'

const Categories = styled.div`
    background-color: #FF715B;
    padding: 5rem;
    font-size: 1rem;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    * {
        margin: 1rem 0;
    }
    h4 {
        font-family: Montserrat, sans-serif;
        font-size: 2rem;
        font-weight: 600;
    }
    div {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        a {
            display: flex;
            flex-direction: column;
            margin-right: 1rem;
            height: 15rem;
            width: 17%;
            background-color: rgba(255, 255, 255,0.16);
            justify-content: center;
            text-align: center;
            text-decoration: none;
            box-sizing: border-box;
            color: #fff;
            border-radius: 10px;
            box-shadow: 0 10px 10px rgba(0,0,0,0.16);
            &:hover {
                box-shadow: 0 0 3px 2px rgba(255,255,255,1);
                cursor: pointer;
            }
        }
        a:last-of-type(5n+1) {
            margin-right: 0;
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
`

function Category(props){
    return(
        <a href="/"><img src={props.imgSrc} alt={props.category} />{props.category}</a>
    )
}

export default function JobCategories() {

    const jobCat = [
        {imgSrc: jobicon1, category: 'Telecaller/BPO'},
        {imgSrc: jobicon2, category: 'Delivery Boy'},
        {imgSrc: jobicon3, category: 'Receptionist / Front Office'},
        {imgSrc: jobicon4, category: 'Office Boy'},
        {imgSrc: jobicon5, category: 'Counter Sales / Retail'},
        {imgSrc: jobicon6, category: 'Finance / Accounts'},
        {imgSrc: jobicon7, category: 'Computer / Data Entry'},
        {imgSrc: jobicon3, category: 'Receptionist / Front Office'},
        {imgSrc: jobicon4, category: 'Office Boy'},
        {imgSrc: jobicon5, category: 'Counter Sales / Retail'},
    ];

    const listCategories = jobCat.map(item => <Category imgSrc={item.imgSrc} category={item.category} key={uuidv4()} /> )

    return (
        <Categories>
            <h4>Popular Job Categories</h4>
            <div>
                {listCategories}
            </div>
            <button>Find More</button>
        </Categories>
    )
}
