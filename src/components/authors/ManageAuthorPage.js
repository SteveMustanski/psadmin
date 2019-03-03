const React = require("react");
const AuthorForm = require("./AuthorForm");
const AuthorApi = require("../../api/authorApi");

const ManageAuthorPage = React.createClass({
  getInitialState: function() {
    return {
      author: { id: "", firstName: "", lastName: "" }
    };
  },
  setAuthorState: function(e) {
    let field = e.target.name;
    let value = e.target.value;
    this.state.author[field] = value;
    return this.setState({ author: this.state.author });
  },

  saveAuthor: function(e) {
    e.preventDefault();
    AuthorApi.saveAuthor(this.state.author);
  },

  render: function() {
    return (
      <AuthorForm
        author={this.state.author}
        onChange={this.setAuthorState}
        onSave={this.saveAuthor}
      />
    );
  }
});

module.exports = ManageAuthorPage;
