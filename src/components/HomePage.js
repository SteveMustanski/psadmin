const React = require("react");

class HomePage extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="jumbotron">
          <h1>Pluralsight Administration</h1>
          <p>React, React Router, and Flux for ultra-responsive web apps.</p>
        </div>
      </div>
    );
  }
}

module.exports = HomePage;
