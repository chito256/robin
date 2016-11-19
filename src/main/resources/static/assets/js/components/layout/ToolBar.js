const React = require('react');
const ReactDOM = require('react-dom');

const ToolBar = React.createClass({
  render() {
    return (
      <div className="tool-bar">
        <ul>
          <li>&#xf044;</li>
          <li>&#xf2b9;</li>
          <li>&#xf086;</li>
        </ul>
      </div>
    )
  }
});

module.exports = ToolBar;
