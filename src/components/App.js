$ = jQuery = require("jquery"); // the example used a global for some reason

const React = require("react");
const Header = require("./common/Header");
const RouteHandler = require("react-router").RouteHandler;

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <RouteHandler />
      </div>
    );
  }
}

module.exports = App;
