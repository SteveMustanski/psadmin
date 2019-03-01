const React = require("react");
const AuthorApi = require("../../api/authorApi");
const Router = require("react-router");
const Link = Router.Link;
const AuthorList = require("./AuthorList");

const AuthorForm = React.createClass({
  render: function() {
    return (
      <div className="container-fluid">
        <form>
          <h1>Manage Author</h1>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            className="form-control"
            placeholder="First Name"
            ref="firstName"
            value=""
          />
          <br />
          <label htmlFor="lastName">First Name</label>
          <input
            type="text"
            name="lastName"
            className="form-control"
            placeholder="Last Name"
            ref="lastName"
            value=""
          />
          <br />

          <input type="submit" value="Save" className="btn btn-success" />
        </form>
      </div>
    );
  }
});

module.exports = AuthorForm;
