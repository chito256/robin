const React = require('react');
const ReactDOM = require('react-dom');

const Friend = require('./Friend');

// Mock data
const friends = [
  {
    id: 0,
    name: 'Ben J. Lee',
    role: 'Software Engineer at Spotify',
    avatar: 'https://www.fillmurray.com/64/64'
  },
  {
    id: 1,
    name: 'Cameron Switzer',
    role: 'Designer at Spotify',
    avatar: 'https://www.fillmurray.com/64/64'
  },
  {
    id: 2,
    name: 'Layla McCabe',
    role: 'Head of Marketing at YouTube',
    avatar: 'https://www.fillmurray.com/64/64'
  },
];

const FriendList = React.createClass({
  render() {
    return (
      <div className="friend-list friendlist-inactive">
        <ul>
          {
            friends.map((friend) => {
              return <Friend  key={friend.id}
                              name={friend.name}
                              role={friend.role}
                              avatar={friend.avatar} ></Friend>
            })
          }
        </ul>
      </div>
    )
  }
});

module.exports = FriendList;
