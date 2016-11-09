const React = require('react');
const ReactDOM = require('react-dom');

const SignInForm = React.createClass({
  getInitialState() {
    return {
      valid: false
    }
  },
  componentWillUpdate() {

  },
  onUsernameChangeHandle(e) {
    const usernameInput = e.target.value.trim();
    const validUsername = /^\w+$/.test(usernameInput);
    const usernameInputDOM = this.refs.usernameInput;
    const submitDOM = this.refs.signinSubmit;
    if (!validUsername) {
      this.setState({ valid: false });
    } else {
      this.setState({ valid: true });
    }
    usernameInputDOM.style.borderBottom = !validUsername ? '1px solid lightcoral' : '1px solid #2095f3';
    submitDOM.style.backgroundColor = !validUsername ? '#aaaaaa' : '#2095f3';
  },
  onPasswordChangeHandle(e) {
    const passwordInput = e.target.value;
    const passwordInputDOM = this.refs.passwordInput;
    if (!passwordInput) {
      passwordInputDOM.style.borderBottom = '1px solid lightcoral';
      this.setState({ valid: false });
    } else {
      passwordInputDOM.style.borderBottom = '1px solid #2095f3';
      this.setState({ valid: true });
    }
  },
  render() {
    return (
      <form>
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
                disabled={!this.state.valid}
                ref="signinSubmit" />
      </form>
    )
  }
})

module.exports = SignInForm;
