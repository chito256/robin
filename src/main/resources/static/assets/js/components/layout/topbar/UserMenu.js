const React = require('react');
const ReactDOM = require('react-dom');

const UserMenu = React.createClass({
  render() {
    return (
      <div className="user-menu">
        <a className="user-name" href="#">{'Johnny Appleseed'}</a> {/* User's name */}
        <a className="user-logout" href="#">Logout</a>
      </div>
    )
  }
})

module.exports = UserMenu;
