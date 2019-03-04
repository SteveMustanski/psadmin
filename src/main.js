const React = require("react");
const Router = require("react-router");
const Routes = require("./Routes");
const InitializeActions = require("./actions/InitializeActions");

InitializeActions.initApp();

Router.run(Routes, function(Handler) {
  React.render(<Handler />, document.getElementById("app"));
});
