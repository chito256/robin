const React = require('react');
const ReactDOM = require('react-dom');

const StyleButton = require('./StyleButton');

const InlineTypes = [
  {label: 'B', type: 'BOLD'},
  {label: 'I', type: 'ITALIC'}
]

const InlineStyleButtons = React.createClass({
  render() {
    const editorState = this.props.editorState;
    const currentStyle = editorState.getCurrentInlineStyle();
    return (
      <ul>
        {
          InlineTypes.map((type) => {
            return <StyleButton
                      key={type.label}
                      label={type.label}
                      onToggle={this.props.toggleInlineStyle}
                      active={currentStyle.has(type.type)}
                      style={type.type} />
          })
        }
        <div style={{clear: 'both'}}></div>
      </ul>
    )
  }
});

module.exports = InlineStyleButtons;
