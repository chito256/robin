const React = require('react');
const ReactDOM = require('react-dom');

const Post = React.createClass({
  render() {
    return (
      <li className="post">
        <div className="post-wrapper">
          <div className="post-info">
            <div className="user-info">
              <img className="user-avatar" src="https://www.fillmurray.com/64/64" />
              <h3 className="user-name">Ben Lee</h3>
              <p className="user-role">Software Engineer at Facebook</p>
            </div>
            <div className="post-date">
              <p>September 5, 2016</p>
            </div>
          </div>
          <div className="post-content">
            <p>Joining Spotify has been one of the best things I have done in my life.
            I just love working with incredible individuals who always thrive to build better products.</p>
          </div>
          <div className="post-metadata">
            <div className="post-hearts">
              <span>Hearts: 5</span>
            </div>
            <div className="post-comments">
              <span>Comments: 3</span>
            </div>
          </div>
        </div>
      </li>
    )
  }
});

module.exports = Post;
