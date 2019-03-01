const React = require("react");
const Router = require("react-router");
const Link = Router.Link;

class HomePage extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="jumbotron">
          <h1>Pluralsight Administration</h1>
          <p>React, React Router, and Flux for ultra-responsive web apps.</p>
          <Link to="about" className="btn btn-primary btn-lg">
            Learn More
          </Link>
        </div>
      </div>
    );
  }
}

module.exports = HomePage;
