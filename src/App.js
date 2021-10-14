// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
function App() {
  return (
    <>
      <Navbar title = 'React Core' aboutTxt = 'About us' />
      {/* <Navbar aboutTxt = 'About us'/> */}
      <div className="container my-3">
      <TextForm Heading = 'Enter Heading' TextTitle = 'Enter Text Title'/>
      </div>
    </>
  );
}
export default App;
