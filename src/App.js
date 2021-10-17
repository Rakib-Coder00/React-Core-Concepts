// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("dark"); //Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      setAlert("Dark mode has been enables", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="React Core"
          aboutTxt="About us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert}></Alert>
        {/* <Navbar aboutTxt = 'About us'/> */}
        <div className="container my-3">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <TextForm showAlert={showAlert} Heading="Enter Heading" mode={mode} TextTitle="Enter Text Title" />
            </Route>
          </Switch>
          <About></About>
        </div>
      </Router>
    </>
  );
}
export default App;
