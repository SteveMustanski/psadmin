const React = require("react");
const Router = require("react-router");
const Routes = require("./Routes");

Router.run(Routes, function(Handler) {
  React.render(<Handler />, document.getElementById("app"));
});
