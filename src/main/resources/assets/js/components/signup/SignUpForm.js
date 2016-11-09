const React = require('react');
const ReactDOM = require('react-dom');

const SignUpForm = React.createClass({
  getInitialState() {
    return {
      valid: false
    }
  },
  render() {
    return (
      <form>
        <div className="signup-name">
          <input  type="text"
                  name="firstName"
                  placeholder="First Name" />
          <input  type="text"
                  name="lastName"
                  placeholder="Last Name" />
        </div>
        <div className="signup-username">
          <input  type="text"
                  name="signupUsername"
                  placeholder="Username" />
        </div>
        <div className="signup-password">
          <input  type="password"
                  name="signupPassword"
                  placeholder="Password" />
          <input  type="password"
                  name="signupPasswordConfirm"
                  placeholder="Confirm Password" />
        </div>
        <div className="signup-gender">
          <select name="gender-select">
            <option value="default" defaultValue>Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="signup-dob">
          <select name="dob-month">
            <option value="default" defaultValue>Birth Month</option>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
          <input  type="number"
                  name="dobDay"
                  placeholder="Birth Day"
                  min={1}
                  max={31} />
          <input  type="number"
                  name="dobYear"
                  placeholder="Birth Year"
                  min={1850}
                  max={2016} />
        </div>
        <input  type="submit"
                name="signupSubmit"
                value="SIGN UP FOR FREE" />
      </form>
    )
  }
})

module.exports = SignUpForm;
