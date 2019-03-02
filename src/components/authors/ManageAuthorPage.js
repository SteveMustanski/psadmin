const React = require("react");

const AuthorForm = require("./AuthorForm");

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
  render: () => {
    return <AuthorForm onChange={this.setAuthorState} />;
  }
});

module.exports = ManageAuthorPage;
