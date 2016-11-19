const React = require('react');
const ReactDOM = require('react-dom');

const TopBar = require('./topbar/TopBar');

const Feed = React.createClass({
  render() {
    return (
      <div className="feed-wrapper">
        <TopBar />
        <div className="main-section">

        </div>
      </div>
    )
  }
});

module.exports = Feed;
