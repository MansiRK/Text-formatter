import "./Form.css"
import React, {useState} from "react"


function Form(props){
    // Array destructuring syntax
    // text = "new text"; Wrong way to change the state
    // setText("new text"); Correct way to change the state
    
    const [text, setText] = useState(" ");

    const handleUpperCase = () => {
        // console.log("You clicked uppercase button" + text) 
        let newText = text.toUpperCase()
        setText(newText)
    }

    const handleLowerCase = () => {
      let newText = text.toLowerCase()
      setText(newText)
    }

    const handleRemoveSpaces = () => {
      let newText = text.trim()
      setText(newText)
    }

    const handleCopy = () => {
      navigator.clipboard.writeText(text)
      alert("You copied the text")
    }

    const handleClear = () => {
      let clearText = ""
      setText(clearText)
      alert("You deleted the text")
    }

    const handleOnChange = (event) => {
        // console.log("You click handle on change")
        // Updating text
        setText(event.target.value)
    }

  

  return (
    <>
    <div className="container my-5">
      <h3>{props.heading} </h3>

      <div className="my-3">
      <textarea className="form-control" name="textBox" value={text} onChange={handleOnChange} placeholder="Enter text here to modify" cols="60" rows="10"></textarea>
      </div>

      <button className="btn btn-dark m-3" onClick={handleUpperCase}>Convert to Uppercase</button>

      <button className="btn btn-dark m-3" onClick={handleLowerCase}>Convert to Lowercase</button>

      <button className="btn btn-dark m-3" onClick={handleRemoveSpaces}>Remove spaces</button>

      <button className="btn btn-dark m-3" onClick={handleCopy}>Copy text</button>

      <button className="btn btn-danger m-3" onClick={handleClear}>Clear text</button>

    </div>

    <div className="container">

    <h3>Your text summary</h3>

    <p>Your text has <b>{text.split(" ").length - 1}</b> words and <b>{text.length}</b> characters</p>
    <p><b>{0.008 * text.split(" ").length}</b> Minutes read time</p>

    <h3>Preview</h3>
    <p>{text}</p>
    </div>
     </>
  )
}

export default Form
