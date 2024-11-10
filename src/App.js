import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Pricing />
    </div>
  );
}

export default App;
