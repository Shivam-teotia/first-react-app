import React, { useState } from 'react'

export default function Textform(props) {
    const [Text, setText] = useState("Enter the Text using useSet");
    const handleUpClick = () => {
        console.log("Uppercase was clicked" + Text);
        let newText = Text.toUpperCase();
        setText(newText);
    }
    const handleDownClick = () => {
        console.log("Lowercase was clicked" + Text);
        let newText = Text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event) => {
        console.log("Uppercase was clicked");
        setText(event.target.value);
    }
    return (
        <>
            <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3" >
                    <textarea className="form-control" value={Text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#332d3c':'white',color:props.mode==='dark'?'white':'black'}} id="mybox" rows="10"></textarea>
                </div>
                <button className="btn btn-primary mx-2 my-2"  onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleDownClick}>Convert to LowerCase</button>
            </div>
            <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>Your Text Summary</h1>
                <p>{Text.split(" ").filter((element)=>{return element.length!==0}).length} words and {Text.length} characters</p>
                <p>time required to read these words is { 0.008 * Text.split(" ").length}</p>
                <h2>Preview</h2>
                <p>{Text.length>0?Text:"Write Something"}</p>
            </div>
        </>

    )
}
