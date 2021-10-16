import React, { useState } from "react";

export default function TextForm(props) {

  const handleCapClick = () => {
    // let newText = text.split(" ").map((currentValue) => {
    //   let newText = currentValue[0].toUpperCase() + currentValue.slice(1);
    //   return newText;
    // });
    let newText =text.split(' ')
    for (let i = 0; i < newText.length; i++) {
      newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1)      
    }
    setText(newText.join(" "));
  };

  const handleUpClick = () => {
    // console.log(' Uppercase clicked' + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };


  const handleClearClick = () => {
    let newText = '';
    setText(newText);
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleOnChange = (event) => {
    // console.log(' onChange clicked');
    setText(event.target.value);
  };

  const handleSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '));
    };

  const [text, setText] = useState("");
  // text = 'new text';  Wrong way to change the state
  // SetText('new text');  Correct way to change the state

  return (
    <>
      <div className="container">
        <div className="mb-3">
          <h1>{props.Heading}</h1>
          <label htmlFor="myBox" className="form-label">
            {props.TextTitle}
          </label>
          <textarea
            value={text}
            onChange={handleOnChange}
            className="form-control"
            id="myBox"
            rows="6"
          ></textarea>
        </div>

        <button className="btn btn-primary mx-2" onClick={handleCapClick}>
          Convert Capitalize
        </button>

        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          Convert Uppercase
        </button>

        <button className="btn btn-primary  mx-2 my-2" onClick={handleLoClick}>
          Convert Lowercase
        </button>

        <button
          className="btn btn-primary  mx-2 my-2"
          onClick={handleClearClick}
        >
          Clear Text
        </button>

        <button className="btn btn-primary  mx-2 my-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary  mx-2 my-2" onClick={handleSpaces}>
          Remove Extra Space
        </button>
      </div>

      <div className="container my-3">
        <h2>Your Text summary</h2>
        <p>
          {text.split(" ").length} Words and {text.length}
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
