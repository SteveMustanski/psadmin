"use strict";

const React = require("react");
const AuthorApi = require("../../api/authorApi");

const AuthorPage = React.createClass({
  getInitialState: function() {
    return {
      authors: []
    };
  },

  componentWillMount: function() {
    this.setState({ authors: AuthorApi.getAllAuthors() });
  },

  render: function() {
    const createAuthorRow = function(author) {
      return (
        <tr key={author.id}>
          <td>
            <a href={"/#authors/" + author.id}> {author.id}</a>
          </td>
          <td>
            {author.firstName} {author.lastName}
          </td>
        </tr>
      );
    };
    return (
      <div className="container">
        <h1>Authors</h1>
        <table className="table">
          <thead>
            <th>ID</th>
            <th>Name</th>
          </thead>
          <tbody>{this.state.authors.map(createAuthorRow, this)}</tbody>
        </table>
      </div>
    );
  }
});

module.exports = AuthorPage;