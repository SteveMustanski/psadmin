"use strict";

const React = require("react");
const Router = require("react-router");
const Link = Router.Link;
const AuthorActions = require("../../actions/AuthorActions");
const AuthorStore = require("../../stores/AuthorStore");
const AuthorList = require("./AuthorList");

const AuthorPage = React.createClass({
  getInitialState: function() {
    return {
      authors: AuthorStore.getAllAuthors()
    };
  },

  componentWillMount: function() {
    AuthorStore.addChangeListener(this._onChange);
  },

  componentWillUnMount: function() {
    AuthorStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState({ authors: AuthorStore.getAllAuthors() });
  },

  render: function() {
    return (
      <div className="container-fluid">
        <h1>Authors</h1>
        <AuthorList authors={this.state.authors} />
        <Link to="addAuthor" className="btn btn-primary mt-2">
          Add Author
        </Link>
      </div>
    );
  }
});

module.exports = AuthorPage;
