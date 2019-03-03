const React = require("react");
const Router = require("react-router");
const Input = require("../common/Input");

const AuthorForm = React.createClass({
  render: function() {
    return (
      <div className="container-fluid">
        <form>
          <h1>Manage Author</h1>
          <Input
            name="firstName"
            label="First Name"
            value={this.props.author.firstName}
            onChange={this.props.onChange}
          />

          <Input
            name="lastName"
            label="Last Name"
            value={this.props.author.lastName}
            onChange={this.props.onChange}
          />

          <input
            type="submit"
            value="Save"
            className="btn btn-success"
            onClick={this.props.onSave}
          />
        </form>
      </div>
    );
  }
});

module.exports = AuthorForm;
