import React from 'react'
import "./App.css"
import Nav from "./components/Nav"
import Form from './components/Form'

function App() {
  return (
    <div>
      <Nav home="Home" about="About Us" />
      <div className="container">

         <Form heading= "Enter the text to analyze" />
      </div>
     
    </div>
  )
}

export default App
