const React = require('react');
const ReactDOM = require('react-dom');

const TopBar = require('./TopBar/TopBar');
const ToolBar = require('./ToolBar');
const LayoutSwitcher = require('./LayoutSwitcher/LayoutSwitcher');

const Feed = React.createClass({
  render() {
    return (
      <div className="feed-wrapper">
        <TopBar />
        <div className="main-section">
          <ToolBar />
          <LayoutSwitcher />
        </div>
      </div>
    )
  }
});

module.exports = Feed;
