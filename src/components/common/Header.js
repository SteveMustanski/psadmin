const React = require("react");

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
              <a className="nav-link" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#Authors">
                Authors
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#About">
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

module.exports = Header;
