import react from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";

class Nav extends react.Component {
  render() {
    return (
      <>
        <div className="container">
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
                  <NavLink to="/users">Users</NavLink>
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
