"use strict";

const React = require("react");
const Router = require("react-router");
const Link = Router.Link;

const AuthorList = React.createClass({
  // propTypes: {
  //   authors: React.propTypes.isRequired
  // },
  render: function() {
    const createAuthorRow = function(author) {
      return (
        <tr key={author.id}>
          <td>
            <Link to="manageAuthor" params={{ id: author.id }}>
              {author.id}
            </Link>
          </td>
          <td>
            {author.firstName} {author.lastName}
          </td>
        </tr>
      );
    };
    return (
      <div className="container-fluid">
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
