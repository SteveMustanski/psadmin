const React = require("react");
const Router = require("react-router");
const AuthorForm = require("./AuthorForm");
const AuthorActions = require("../../actions/AuthorActions");
const AuthorStore = require("../../stores/AuthorStore");
const toastr = require("toastr");

const ManageAuthorPage = React.createClass({
  mixins: [Router.Navigation],
  statics: {
    willTransitionFrom: (transition, compoenent) => {
      if (
        compoenent.state.dirty &&
        !confirm("Are you sure you want to leave without saving?")
      ) {
        transition.abort();
      }
    }
  },
  getInitialState: function() {
    return {
      author: { id: "", firstName: "", lastName: "" },
      errors: {},
      dirty: false
    };
  },
  setAuthorState: function(e) {
    this.setState({ dirty: true });
    let field = e.target.name;
    let value = e.target.value;
    this.state.author[field] = value;
    return this.setState({ author: this.state.author });
  },

  componentWillMount: function() {
    let authorId = this.props.params.id;
    if (authorId) {
      this.setState({ author: AuthorStore.getAuthorById(authorId) });
    }
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
    AuthorActions.createAuthor(this.state.author);
    this.setState({ dirty: false });
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
