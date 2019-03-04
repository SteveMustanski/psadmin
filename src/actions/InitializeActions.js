"use strict";

const Dispatcher = require("../dispatcher/appDispatcher");
const AuthorApi = require("../api/authorApi");
const ActionTypes = require("../constants/actionTypes");

const InitializeActions = {
  initApp: function() {
    Dispatcher.dispatch({
      actionType: ActionTypes.INITIALIZE,
      initialData: {
        authors: AuthorApi.getAllAuthors()
      }
    });
  }
};

module.exports = InitializeActions;
