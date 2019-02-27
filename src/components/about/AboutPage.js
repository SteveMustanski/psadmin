const React = require("react");

class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <p>
          This page uses the following technologies:
          <ul>
            <li>React</li>
            <li>React Router</li>
            <li>Flux</li>
            <li>Node</li>
            <li>Gulp</li>
            <li>Browserify</li>
            <li>Bootstrap</li>
          </ul>
        </p>
      </div>
    );
  }
}

module.exports = AboutPage;
