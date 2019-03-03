"use strict";

const Dispatcher = require("../dispatcher/appDispatcher");
const AuthorApi = require("../api/authorApi");
const ActionTypes = require("../constants/actionTypes");

const AuthorActions = {
  createAuthor: function(author) {
    let newAuthor = AuthorApi.saveAuthor(author);

    // tells the dispatcher to tell stores an author was added
    Dispatcher.dispatch({
      actionType: ActionTypes.CREATE_AUTHOR,
      author: newAuthor
    });
  }
};

module.exports = AuthorActions;
