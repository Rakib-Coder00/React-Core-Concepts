// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState('dark'); //Whether dark mode is enabled or not  
  const toggleMode = ()=>{
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'grey'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <>
      <Navbar title="React Core" aboutTxt="About us" mode={mode} toggleMode = {toggleMode} />
      {/* <Navbar aboutTxt = 'About us'/> */}
      <div className="container my-3">
        <TextForm Heading="Enter Heading" TextTitle="Enter Text Title" />
        <About></About>
      </div>
    </>
  );
}
export default App;
