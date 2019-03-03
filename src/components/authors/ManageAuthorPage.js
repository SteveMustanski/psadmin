const React = require("react");
const Router = require("react-router");
const AuthorForm = require("./AuthorForm");
const AuthorApi = require("../../api/authorApi");
const toastr = require("toastr");

const ManageAuthorPage = React.createClass({
  mixins: [Router.Navigation],
  getInitialState: function() {
    return {
      author: { id: "", firstName: "", lastName: "" },
      errors: {}
    };
  },
  setAuthorState: function(e) {
    let field = e.target.name;
    let value = e.target.value;
    this.state.author[field] = value;
    return this.setState({ author: this.state.author });
  },

  authorFormIsValid: function() {
    let FormIsValid = true;
    this.state.errors = {};
    if (this.state.author.firstName.length < 3) {
      this.state.errors.firstName =
        "First name must contain at least 3 characters.";
      FormIsValid = false;
    }
    if (this.state.author.lastName.length < 3) {
      this.state.errors.lastName =
        "Last name must contain at least 3 characters.";
      FormIsValid = false;
    }
    this.setState({ errors: this.state.errors });
    return FormIsValid;
  },

  saveAuthor: function(e) {
    e.preventDefault();
    if (!this.authorFormIsValid()) {
      return;
    }
    AuthorApi.saveAuthor(this.state.author);
    toastr.success("Author Saved");
    this.transitionTo("authors");
  },

  render: function() {
    return (
      <AuthorForm
        author={this.state.author}
        onChange={this.setAuthorState}
        onSave={this.saveAuthor}
        errors={this.state.errors}
      />
    );
  }
});

module.exports = ManageAuthorPage;
