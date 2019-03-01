const React = require("react");

const AboutPage = React.createClass({
  statics: {
    willTransitionTo: (transition, params, query, callback) => {
      if (!confirm("Are you sure you want to read the about page?")) {
        transition.about();
      } else {
        callback();
      }
    },
    willTransitionFrom: (transition, compoenent) => {
      if (!confirm("Are you sure you want to leave this page?")) {
        transition.about();
      }
    }
  },

  render() {
    return (
      <div className="container-fluid">
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
});

module.exports = AboutPage;
