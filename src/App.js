import logo from "./logo.svg";
import "./App.css";

let name = 'Rakib'
function App() {

  return (
    <>
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </nav>
    <div className="container">
      <h1>Hello {name}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quia non et animi, saepe maiores blanditiis. Debitis, nobis? Corporis consectetur ad incidunt, sed sit eius! Corporis necessitatibus autem eos similique?</p>
    </div>
    </>
  );
}


export default App;
