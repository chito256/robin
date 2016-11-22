const React = require('react');
const ReactDOM = require('react-dom');

const Writer = require('./Writer');
const FriendList = require('./FriendList');

const LayoutSwitcher = React.createClass({
  render() {
    return (
      <div className="layout-switcher">
        <Writer />
        {/* <FriendList /> */}
      </div>
    )
  }
});

module.exports = LayoutSwitcher;
