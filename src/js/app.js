/**
 * @jsx React.DOM
 */


var React = require('react');
var Example = require('./example');

React.renderComponent(Example(null), document.getElementById('view'));