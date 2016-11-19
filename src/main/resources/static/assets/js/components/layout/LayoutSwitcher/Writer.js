const React = require('react');
const ReactDOM = require('react-dom');
const {Editor, EditorState, RichUtils} = require('draft-js');

const BlockStyleButtons = require('./BlockStyleButtons');

const Writer = React.createClass({
  getInitialState() {
    return {
      editorState: EditorState.createEmpty(),
      value: ''
    }
  },
  onChange(editorState) {
    this.setState({editorState});
  },
  onBlockStyleToggle(type) {
    const editorState = this.state.editorState;
    this.onChange(
      RichUtils.toggleBlockType(
        editorState,
        type
      )
    );
    // console.log(type);
  },
  render() {
    return (
      <div className="writer">
        <div className="writer-rich-controls">
          <BlockStyleButtons toggleBlockStyle={this.onBlockStyleToggle} />
        </div>
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
        />
      </div>
    )
  }
});

module.exports = Writer;
