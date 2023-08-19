
import "./Form.css"

function Form(props) {
  return (
    <div className='form mb-3'>
        <h3>{props.heading}</h3>
      <label htmlFor="myBox" className='form-label'>Enter text here</label>
      <textarea name="textBox" className="form-control" cols="60" rows="10"></textarea>
    </div>
  )
}

export default Form
