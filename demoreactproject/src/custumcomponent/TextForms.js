import React, { useState } from 'react'

export default function TextForms(props) {
    const [text,setText]=useState('Default Enter Text here');
    //  setText("I am new value");

    const handleMyClick=()=>{

        //onclick event logic to change text into upper case
        console.log('convert upper case change button click');
        setText("I am new value");
         // alert(text);
        let newText=text.toUpperCase();
        setText(newText);
  

    }
    const  handleOnchange =(event)=>{
        //handlevent so whenever we change text , it will put same updated value into value attribute of
        console.log('handleOnchange click');
       
        setText(event.target.value);
       
        
    }
  return (
    <div>
<div className="mb-3">
  <label htmlFor="myBox" className="form-label">{props.heading}</label>
  <textarea className="form-control" id="myBox" rows="8" value={text}  onChange={handleOnchange}></textarea>
</div>
<button className='btn btn-primary' onClick={handleMyClick}>Convert To UpperCase</button>
    </div>
  )
}
