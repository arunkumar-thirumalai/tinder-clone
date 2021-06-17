import React from "react";
import './App.css';
import Header from "./Header";
import TinderCards from "./TinderCards.js"
import SwipeButtons from "./SwipeButtons.js"

function App() {
  return <div className="App">
    <Header></Header>
    <TinderCards></TinderCards>
    <SwipeButtons></SwipeButtons>
  </div>;
}

export default App;
