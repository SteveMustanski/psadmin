"use strict";

const React = require("react");
const Router = require("react-router");
const DefaultRoute = Router.DefaultRoute;
const Route = Router.Route;

const routes = (
  <Route name="app" path="/" handler={require("./components/App")}>
    <DefaultRoute handler={require("./components/HomePage")} />
    <Route
      name="authors"
      handler={require("./components/authors/AuthorPage")}
    />
    <Route name="about" handler={require("./components/about/AboutPage")} />
  </Route>
);

module.exports = Routes;
