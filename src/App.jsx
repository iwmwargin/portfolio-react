import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from "./components/Intro/";
import Nav from "./components/Nav";
import Header from "./components/Header";


const App = () => {
  const [pages] = useState([
    
  ])
  return (
  <Router>
  <Header><Nav/></Header>
  <Intro/>

  </Router>
  );
};

export default App;