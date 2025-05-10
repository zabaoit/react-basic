import react from "react";
import "./Nav.scss";

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
                  <a href="/" className="active">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/todo">TodoApp</a>
                </li>
                <li>
                  <a href="/about">About</a>
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
