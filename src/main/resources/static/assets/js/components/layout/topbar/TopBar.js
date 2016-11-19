const React = require('react');
const ReactDOM = require('react-dom');

const Search = require('./Search');
const UserMenu = require('./UserMenu');

const TopBar = React.createClass({
  render() {
    return (
      <div className="top-bar">
        <Search />
        <UserMenu />
      </div>
    )
  }
});

module.exports = TopBar;
