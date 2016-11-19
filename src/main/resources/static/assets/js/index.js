const React = require('react');
const ReactDOM = require('react-dom');

// Components --------------
const SignInForm = require('./components/forms/SignInForm');
const SignUpForm = require('./components/forms/SignUpForm');
const Feed = require('./components/layout/Feed');
// Components --------------

if (document.getElementById('signin-form-section')) {
  ReactDOM.render(
    <SignInForm />,
    document.getElementById('signin-form-section')
  );
}

if (document.getElementById('signup-form-section')) {
  ReactDOM.render(
    <SignUpForm />,
    document.getElementById('signup-form-section')
  );
}

if (document.getElementById('feed-root')) {
  ReactDOM.render(
    <Feed />,
    document.getElementById('feed-root')
  )
}
