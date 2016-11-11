const React = require('react');
const ReactDOM = require('react-dom');

// Components --------------
const SignInForm = require('./components/signin/SignInForm');
const SignUpForm = require('./components/signup/SignUpForm');
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
