import React from 'react';

import './App.css';
import Navbar from "./components/Navbar/Navbar";
import PromoBanner from "./components/PromoBanner/PromoBanner";

function App() {
  return (
    <div className="App">
        <Navbar className={"nav"}/>
        <PromoBanner className={"banner"}/>

    </div>
  );
}

export default App;
