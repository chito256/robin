const React = require('react');
const ReactDOM = require('react-dom');

const Post = require('./Post');

const Posts = React.createClass({
  render() {
    return (
      <div className="feed-posts">
        <ul>
          <Post />
        </ul>
      </div>
    )
  }
});

module.exports = Posts;
