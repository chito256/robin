const React = require('react');
const ReactDOM = require('react-dom');

const StyleButton = require('./StyleButton');

const BlockTypes = [
  {label: 'H1', type: 'header-one'},
  {label: 'H2', type: 'header-two'},
  {label: 'H3', type: 'header-three'},
  {label: 'H4', type: 'header-four'},
  {label: 'H5', type: 'header-five'},
  {label: 'H6', type: 'header-six'},
  {label: 'UL', type: 'unordered-list-item'},
  {label: 'OL', type: 'ordered-list-item'}
]

const BlockStyleButtons = React.createClass({
  render() {
    const editorState = this.props.editorState;
    const selection = editorState.getSelection();
    const blockType = editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType();
    return (
      <ul>
        {
          BlockTypes.map((type) => {
            return <StyleButton
                      key={type.label}
                      label={type.label}
                      onToggle={this.props.toggleBlockStyle}
                      active={blockType == type.type}
                      style={type.type} />
          })
        }
        <div style={{clear: 'both'}}></div>
      </ul>
    )
  }
});

module.exports = BlockStyleButtons;
