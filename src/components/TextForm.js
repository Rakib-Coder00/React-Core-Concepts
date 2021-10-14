import React, {useState} from "react";


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log(' Uppercase clicked' + text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText)

    }

    const handleOnChange = (event) => {
        // console.log(' onChange clicked');
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    // text = 'new text';  Wrong way to change the state 
    // SetText('new text');  Correct way to change the state 

    return (
        <>
        <div className = 'container'>
            <div className="mb-3">
                <h1>{props.Heading}</h1>
                <label htmlFor="myBox" className="form-label">
                    {props.TextTitle}
                </label>
                <textarea value ={text} onChange={handleOnChange} className="form-control" id="myBox" rows="6">

                </textarea>
            </div>
            <button className="btn btn-primary" onClick = {handleUpClick}>Convert Uppercase</button>

            <button className="btn btn-primary  mx-2" onClick = {handleLoClick}>Convert Lowercase</button>
        </div>
        <div className="container my-3">
            <h2>Your Text summary</h2>
            <p>{text.split(' ').length} Words and {text.length}</p>
            <p>{0.008 * text.split(' ').length} minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    );
}
 