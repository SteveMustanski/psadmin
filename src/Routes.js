"use strict";

const React = require("react");
const Router = require("react-router");
const DefaultRoute = Router.DefaultRoute;
const Route = Router.Route;
const NotFoundRoute = Router.NotFoundRoute;
const Redirect = Router.Redirect;

const Routes = (
  <Route name="app" path="/" handler={require("./components/App")}>
    <DefaultRoute handler={require("./components/HomePage")} />
    <Route
      name="authors"
      handler={require("./components/authors/AuthorPage")}
    />
    <Route
      name="addAuthor"
      path="author"
      handler={require("./components/authors/ManageAuthorPage")}
    />
    <Route name="about" handler={require("./components/about/AboutPage")} />
    <NotFoundRoute handler={require("./components/NotFound")} />
    <Redirect from="about-us" to="about" />
    <Redirect from="about/*" to="about" />
  </Route>
);

module.exports = Routes;
