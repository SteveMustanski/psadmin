"use strict";

const Dispatcher = require("../dispatcher/appDispatcher");
const ActionTypes = require("../constants/actionTypes");
const EventEmitter = require("events").EventEmitter;
const assign = require("object-assign");
const CHANGE_EVENT = "change";
const _ = require("lodash");

let _authors = [];

const AuthorStore = assign({}, EventEmitter.prototype, {
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  getAllAuthors: function() {
    return _authors;
  },
  getAuthorById: function(id) {
    return _.find(_authors, { id: id });
  }
});

Dispatcher.register(function(action) {
  switch (action.actionType) {
    case ActionTypes.INITIALIZE:
      _authors = action.initialData.authors;
      AuthorStore.emitChange();
      break;
    case ActionTypes.CREATE_AUTHOR:
      _authors.push(action.author);
      AuthorStore.emitChange();
      break;
    default:
    // nothing to do here
  }
});

module.exports = AuthorStore;
