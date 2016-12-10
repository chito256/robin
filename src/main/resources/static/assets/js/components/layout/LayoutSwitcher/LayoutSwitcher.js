const React = require('react');
const ReactDOM = require('react-dom');

const Writer = require('./writer/Writer');
const FriendList = require('./friendlist/FriendList');

const LayoutSwitcher = React.createClass({
  render() {
    return (
      <div className="layout-switcher">
        <Writer />
        <FriendList />
      </div>
    )
  }
});

module.exports = LayoutSwitcher;
