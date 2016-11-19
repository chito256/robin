const React = require('react');
const ReactDOM = require('react-dom');

const Writer = require('./Writer');

const LayoutSwitcher = React.createClass({
  render() {
    return (
      <div className="layout-switcher">
        <Writer />
      </div>
    )
  }
});

module.exports = LayoutSwitcher;
