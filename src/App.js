import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List.js';


function App(props) { //props.store is equal to STORE from store.js
let listOfListOfCards = props.store.lists.map(obj => obj.cardIds.map(elem => props.store.allCards[elem]));

  return (
    props.store.lists.map(obj => 
      <List header={obj.header} card={listOfListOfCards}/>
      )
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
