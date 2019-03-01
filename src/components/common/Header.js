const React = require("react");
const Router = require("react-router");
const Link = Router.Link;

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <img src="images/pluralsight-logo.png" />
        </a>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="app">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="authors">
                Authors
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="about">
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

module.exports = Header;
