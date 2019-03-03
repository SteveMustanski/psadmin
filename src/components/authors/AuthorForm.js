const React = require("react");
const AuthorApi = require("../../api/authorApi");
const Router = require("react-router");
const Link = Router.Link;
const AuthorList = require("./AuthorList");
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

          <input type="submit" value="Save" className="btn btn-success" />
        </form>
      </div>
    );
  }
});

module.exports = AuthorForm;
