"use strict";

const React = require("react");

const AuthorList = React.createClass({
  propTypes: {
    authors: React.propTypes.isRequired
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
        <table className="table">
          <thead>
            <th>ID</th>
            <th>Name</th>
          </thead>
          <tbody>{this.props.authors.map(createAuthorRow, this)}</tbody>
        </table>
      </div>
    );
  }
});

module.exports = AuthorList;
