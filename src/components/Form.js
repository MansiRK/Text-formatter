import "./Form.css"
import React, {useState} from "react"


function Form(props){
    // Array destructuring syntax
    // text = "new text"; Wrong way to change the state
    // setText("new text"); Correct way to change the state
    
    const handleUpperCase = () => {
        console.log("You clicked uppercase button" + text) 
        let newText = text.toUpperCase()
        setText(newText)
    }

    const handleOnChange = (event) => {
        console.log("You click handle on change")
        // Updating text
        setText(event.target.value)
    }

  const [text, setText] = useState("Enter text here");

  return (
    <div className="form mb-3">
      <h3>{props.heading} </h3>
      <textarea className="form-control" name="textBox" value={text} onChange={handleOnChange} cols="60" rows="10"></textarea>
      <button className="btn btn-dark" onClick={handleUpperCase}>Convert to Uppercase</button>
    </div>
  )
}

export default Form
