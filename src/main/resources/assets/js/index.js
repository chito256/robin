const React = require('react');
const ReactDOM = require('react-dom');

// Components --------------
const SignInForm = require('./components/signin/SignInForm')
// Components --------------

ReactDOM.render(
  <SignInForm />,
  document.getElementById('signin-form-section')
)
