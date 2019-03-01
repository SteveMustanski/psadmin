const React = require("react");
const Router = require("react-router");
const Link = Router.Link;

class NotFound extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Page Not Found</h1>
        <p>Looks like you referenced a page that doesn't exist.</p>
        <Link to="app">Return to Home Page</Link>
      </div>
    );
  }
}

module.exports = NotFound;
