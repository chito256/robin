const React = require('react');
const ReactDOM = require('react-dom');

const Search = React.createClass({
  render() {
    return (
      <div className="search-bar">
        <span className="search-icon">&#xf002;</span> {/* Search icon */}
        <input type="text" name="searchValue" placeholder="Search" />
      </div>
    )
  }
})

module.exports = Search;
