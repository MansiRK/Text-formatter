import React from 'react'
import "./App.css"
import Nav from "./components/Nav"
import Form from './components/Form'
import About from "./components/About"

function App() {
  return (
    <div>
      <Nav home="Home" about="About Us" />
      <div className="container">

         <Form heading= "Enter the text to analyze" />
      </div>
      <About/>
     
    </div>
  )
}

export default App
