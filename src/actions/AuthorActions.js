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
  },
  updateAuthor: function(author) {
    let updatedAuthor = AuthorApi.saveAuthor(author);

    // tells the dispatcher to tell stores an author was updated
    Dispatcher.dispatch({
      actionType: ActionTypes.UPDATE_AUTHOR,
      author: updatedAuthor
    });
  },
  deleteAuthor: function(id) {
    AuthorApi.deleteAuthor(id);

    // tells the dispatcher to tell stores an author was updated
    Dispatcher.dispatch({
      actionType: ActionTypes.DELETE_AUTHOR,
      id: id
    });
  }
};

module.exports = AuthorActions;
