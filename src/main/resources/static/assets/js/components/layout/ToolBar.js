const React = require('react');
const ReactDOM = require('react-dom');

const ToolBar = React.createClass({
  componentDidMount() {
    this.writer = document.getElementsByClassName('writer')[0];
    this.friendlist = document.getElementsByClassName('friend-list')[0];
  },
  switchToWriter() {
    this.friendlist.classList.remove('friendlist-active');
    this.friendlist.classList.add('friendlist-inactive');
    this.writer.classList.remove('writer-inactive');
    this.writer.classList.add('writer-active');
  },
  switchToFriendList() {
    this.friendlist.classList.remove('friendlist-inactive');
    this.friendlist.classList.add('friendlist-active');
    this.writer.classList.remove('writer-active');
    this.writer.classList.add('writer-inactive');
  },
  render() {
    return (
      <div className="tool-bar">
        <ul>
          <li onClick={this.switchToWriter}>&#xf044;</li>
          <li onClick={this.switchToFriendList}>&#xf2b9;</li>
        </ul>
      </div>
    )
  }
});

module.exports = ToolBar;
