const React = require('react');
const ReactDOM = require('react-dom');

const StyleButton = React.createClass({
  onToggle(e) {
    e.preventDefault();
    this.props.onToggle(this.props.style);
  },
  render() {
    return (
      <li onMouseDown={this.onToggle}>
        {this.props.label}
      </li>
    )
  }
});

module.exports = StyleButton;
