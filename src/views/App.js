import logo from "./logo.svg";
import "./App.scss";
// import MyComponent from "./Example/MyComponent";
import ListToDo from "./Todo/ListToDo";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
/*
   2 components: class components => render() {...}/ function components (function, arrow function) => return (...)
  JSX
*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Simple ListToDo with reactjs</p>
        {/* <a className="App-link" href="https://github.com/zabaoit" target="_blank" rel="noopener noreferrer">
          Learn React
        </a> */}
        {/* <MyComponent /> */}
        {/* <MyComponent></MyComponent> */}
        <ListToDo />
      </header>

      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
