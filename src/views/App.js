import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./Example/MyComponent";
/*
   2 components: class components => render() {...}/ function components (function, arrow function) => return (...)
  JSX
*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello World wirh React.js (NGB)</p>
        <a className="App-link" href="https://github.com/zabaoit" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <MyComponent />
        {/* <MyComponent></MyComponent> */}
      </header>
    </div>
  );
}

export default App;
