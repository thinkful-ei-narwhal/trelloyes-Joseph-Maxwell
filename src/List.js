import React from 'react';
import STORE from './store.js';
import Card from './Card.js';

export default function List(props){
    Card();
    // let findCardId = STORE.lists.map(listObj => listObj.cardIds); //Array of CardID arrays
    return (
        <section className='List'>
            <header className='List-cards'>{props.header}</header>
            <div className='List-cards'>{props.card}</div>
        </section>
    )
}

