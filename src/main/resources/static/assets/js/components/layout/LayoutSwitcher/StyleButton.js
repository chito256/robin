const React = require('react');
const ReactDOM = require('react-dom');

const StyleButton = React.createClass({
  onToggle(e) {
    e.preventDefault();
    this.props.onToggle(this.props.style);
  },
  render() {
    let className = '';
    if (this.props.active) {
      className += ' active-style-button';
    }
    if (this.props.label == 'B') {
      className += ' writer-bold-style';
    }
    if (this.props.label == 'I') {
      className += ' writer-italic-style';
    }
    return (
      <li className={className} onMouseDown={this.onToggle}>
        {this.props.label}
      </li>
    )
  }
});

module.exports = StyleButton;
