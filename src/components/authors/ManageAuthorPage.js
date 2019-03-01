const React = require("react");

const AuthorForm = require("./AuthorForm");

const ManageAuthorPage = React.createClass({
  render: () => {
    return (
      <div className="container-fluid">
        <AuthorForm />
      </div>
    );
  }
});

module.exports = ManageAuthorPage;
