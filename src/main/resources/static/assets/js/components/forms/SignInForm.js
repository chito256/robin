const React = require('react');
const ReactDOM = require('react-dom');

const SignInForm = React.createClass({
  getInitialState() {
    return {
      username: '',
      password: '',
      validUsername: false,
      validPassword: false
    }
  },
  componentDidUpdate() {
    this.applyStyles();
  },
  applyStyles() {
    const usernameInputDOM = this.refs.usernameInput;
    const passwordInputDOM = this.refs.passwordInput;
    const submitBtnDOM = this.refs.signinSubmit;
    usernameInputDOM.style.borderBottom = this.state.validUsername ? '1px solid #2095f3' : '1px solid lightcoral';
    passwordInputDOM.style.borderBottom = this.state.validPassword ? '1px solid #2095f3' : '1px solid lightcoral';
    submitBtnDOM.style.background = (this.state.validUsername && this.state.validPassword) ? '#2095f3' : '#aaaaaa';
  },
  onUsernameChangeHandle(e) {
    const usernameInput = e.target.value;
    const validUsername = /^\w+$/.test(usernameInput);
    this.setState({
      username: usernameInput,
      validUsername: validUsername
    });
  },
  onPasswordChangeHandle(e) {
    const passwordInput = e.target.value;
    const passwordLength = passwordInput.length;
    this.setState({
      password: passwordInput,
      validPassword: passwordLength > 0 ? true : false
    });
  },
  render() {
    return (
      <form action="/greeting" method="POST">
        <input  type="text"
                name="username"
                placeholder="Username"
                onChange={this.onUsernameChangeHandle}
                ref="usernameInput" />
        <input  type="password"
                name="password"
                placeholder="Password"
                onChange={this.onPasswordChangeHandle}
                ref="passwordInput" />
        <input  type="submit"
                name="signinSubmit"
                value="SIGN IN"
                disabled={!this.state.validUsername || !this.state.validPassword}
                ref="signinSubmit" />
      </form>
    )
  }
})

module.exports = SignInForm;
