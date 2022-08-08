import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
//import { fallback } from "constant/navList";
import Routes from "./Route/Routes";



import './App.css';

function App() {
  console.log( "Asha");
  console.log( process.env.PUBLIC_URL);
  return (
    
      <div className="App">
      <div>
       <h1 className="text-3xl font-bold underline">
        Hello World!
       </h1>
       <Router>
       <Routes></Routes>
       </Router>
       </div>
     
    </div>
  );
}

export default App;
