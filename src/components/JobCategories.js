import React from 'react'
import styled from 'styled-components'

const Categories = styled.div`

`

function Category(props){
    return(
        <a href="/"><img src={props.imgSrc} alt={props.category} />{props.category}</a>
    )
}

export default function JobCategories() {

    const jobCat = [
        {imgSrc: 'http://placehold.it/50x50', category: 'Telecaller/BPO'},
        {imgSrc: 'http://placehold.it/50x50', category: 'Delivery Boy'},
        {imgSrc: 'http://placehold.it/50x50', category: 'Receptionist/Front Office'},
        {imgSrc: 'http://placehold.it/50x50', category: 'Office Boy'},
    ];

    const listCategories = jobCat.map(item => <Category imgSrc={item.imgSrc} category={item.category} /> )

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
