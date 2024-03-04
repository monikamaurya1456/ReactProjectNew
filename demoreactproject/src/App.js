import './App.css';
import Navbar from './custumcomponent/Navbar';
import TextForms from './custumcomponent/TextForms'
import { useState } from 'react';

function App() {
  return (
    <>
    {/* //for props */}
    <Navbar DynmicMenuName="TextUtil(it is by props)" aboutTitle="About Us"></Navbar>
    
    {/* below line for type safe check sending number instead of string propsType */}
    {/* <Navbar DynmicMenuName="TextUtil(it is by props)" aboutTitle={3}></Navbar> */} 
  

    {/* //for state */}
    <div className='container'>
    <TextForms heading="Enter text to analyse below"></TextForms>
    </div>
    </>
  );


}


export default App;
