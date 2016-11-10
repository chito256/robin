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
  onChangeHandle(e) {
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
  render() {
    return (
      <form th:action="@{/login}" method="post">
        <input  type="text"
                name="username"
                placeholder="Username"
                onChange={this.onChangeHandle}
                ref="usernameInput" />
        <input type="password" name="password" placeholder="Password" />
        <input  type="submit"
                name="signinSubmit"
                value="SIGN IN"
                disabled={!this.state.valid}
                onClick={(e) => {
                  e.preventDefault();
                }}
                ref="signinSubmit" />
      </form>
    )
  }
})

module.exports = SignInForm;
