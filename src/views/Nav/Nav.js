import react from "react";
import "./Nav.scss";
import { Link, NavLink } from "react-router-dom";

class Nav extends react.Component {
  render() {
    return (
      <>
        {/* <div class="topnav">
          <a class="active" href="#home">
            Home
          </a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div> */}
        <div class="container">
          <div id="navigation-bar">
            <nav>
              <ul>
                <li>
                  <NavLink to="/" exact={true}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/todo">Todo</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/user">Users</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </>
    );
  }
}

export default Nav;
