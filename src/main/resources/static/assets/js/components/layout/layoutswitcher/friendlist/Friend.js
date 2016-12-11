const React = require('react');
const ReactDOM = require('react-dom');

const Friend = React.createClass({
  render() {
    return (
      <li className="friend">
        <img className="user-avatar" src={this.props.avatar} />
        <div className="user-info">
          <h4 className="user-name">{this.props.name}</h4>
          <span className="user-role">{this.props.role}</span>
        </div>
      </li>
    )
  }
});

module.exports = Friend;
