import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./Example/MyComponent";
import ListToDo from "./Todo/ListToDo";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Nav from "./Nav/Nav";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./Example/Home";
/*
   2 components: class components => render() {...}/ function components (function, arrow function) => return (...)
  JSX
*/

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />

          <Switch>
            <Route path="/about">
              <MyComponent />
            </Route>
            <Route path="/todo">
              <ListToDo />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
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
    </BrowserRouter>
  );
}

export default App;
