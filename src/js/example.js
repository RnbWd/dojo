/**
 * @jsx React.DOM
 */

var React = require('react');

var Example = React.createClass({displayName: 'Example',

  render: function() {
    return (
      React.DOM.div(null, 
      "Hello World!"
      )
    );
  }

});

module.exports = Example;