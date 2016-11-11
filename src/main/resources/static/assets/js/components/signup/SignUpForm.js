const React = require('react');
const ReactDOM = require('react-dom');

const SignUpForm = React.createClass({
  getInitialState() {
    return {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      confirmPassword: '',
      gender: '',
      bMonth: '',
      bDay: '',
      bYear: '',
      minDay: 1,
      maxDay: 31,
      validFirstName: false,
      validLastName: false,
      validUsername: false,
      validPassword: false,
      validGender: false,
      validBMonth: false,
      validBDay: false,
      validBYear: false
    }
  },
  onInputHandle(type, e) {
    switch (type) {
      case 'FIRST_NAME': {
        const isValid = /[\w\s]+/.test(e.target.value);
        this.setState({
          firstName: e.target.value,
          validFirstName: isValid
        });
        break;
      }
      case 'LAST_NAME': {
        const isValid = /[\w\s]+/.test(e.target.value);
        this.setState({
          lastName: e.target.value,
          validLastName: isValid
        });
        break;
      }
      case 'USERNAME': {
        const isValid = /^\w+$/.test(e.target.value);
        this.setState({
          username: e.target.value,
          validUsername: isValid
        });
        break;
      }
      case 'PASSWORD': {
        this.setState({ password: e.target.value });
        break;
      }
      case 'CONFIRM_PASSWORD': {
        const isValid = this.state.password.length > 0 && e.target.value === this.state.password;
        this.setState({
          confirmPassword: e.target.value,
          validPassword: isValid
        });
        break;
      }
      case 'GENDER': {
        const isValid = e.target.value != 'default';
        this.setState({
          gender: e.target.value,
          validGender: isValid
        });
        break;
      }
      case 'BIRTH_MONTH': {
        const bMonthValue = e.target.value;
        const isValid = bMonthValue != 'default';
        this.setState({
          bMonth: bMonthValue,
          validBMonth: isValid
        })
        if (
          bMonthValue == '1' ||
          bMonthValue == '3' ||
          bMonthValue == '5' ||
          bMonthValue == '7' ||
          bMonthValue == '8' ||
          bMonthValue == '10' ||
          bMonthValue == '12'
        ) {
          this.setState({ minDay: 1, maxDay: 31 })
        } else if (
          bMonthValue == '2' &&
          (this.state.bYear % 4 != 0 || this.state.bYear % 400 != 0)
        ) {
          this.setState({ minDay: 1, maxDay: 28 })
        } else if (bMonthValue == '2') {
          this.setState({ minDay: 1, maxDay: 29 })
        } else {
          this.setState({ minDay: 1, maxDay: 30 })
        }
        break;
      }
      case 'BIRTH_DAY': {
        const bDayValue = e.target.value;
        const isValid = bDayValue != null;
        this.setState({
          bDay: bDayValue,
          validBDay: isValid
        });
        break;
      }
      case 'BIRTH_YEAR': {
        const bYearValue = e.target.value;
        const isValid = bYearValue != null;
        this.setState({
          bYear: bYearValue,
          validBYear: isValid
        });
        if (this.state.bMonth == '2') {
          if (bYearValue % 4 != 0 || bYearValue % 400 != 0) {
            this.setState({
              minDay: 1,
              maxDay: 28
            });
          } else {
            this.setState({
              minDay: 1,
              maxDay: 29
            });
          }
        }
        break;
      }
      default:
        break;
    }
  },
  render() {
    return (
      <form>
        <div className="signup-name">
          <input  type="text"
                  name="firstName"
                  placeholder="First Name"
                  onChange={(e) => { this.onInputHandle('FIRST_NAME', e) }} />
          <input  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  onChange={(e) => { this.onInputHandle('LAST_NAME', e) }} />
        </div>
        <div className="signup-username">
          <input  type="text"
                  name="signupUsername"
                  placeholder="Username"
                  onChange={(e) => { this.onInputHandle('USERNAME', e) }} />
        </div>
        <div className="signup-password">
          <input  type="password"
                  name="signupPassword"
                  placeholder="Password"
                  onChange={(e) => { this.onInputHandle('PASSWORD', e) }} />
          <input  type="password"
                  name="signupPasswordConfirm"
                  placeholder="Confirm Password"
                  onChange={(e) => { this.onInputHandle('PASSWORD_CONFIRM', e) }} />
        </div>
        <div className="signup-gender">
          <select name="gender-select"
                  onChange={(e) => { this.onInputHandle('GENDER', e) }} >
            <option value="default" defaultValue>Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="signup-dob">
          <select name="dob-month"
                  onChange={(e) => { this.onInputHandle('BIRTH_MONTH', e) }} >
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
                  min={this.state.minDay}
                  max={this.state.maxDay}
                  onChange={(e) => { this.onInputHandle('BIRTH_DAY', e) }} />
          <input  type="number"
                  name="dobYear"
                  placeholder="Birth Year"
                  min={1850}
                  max={2016}
                  onChange={(e) => { this.onInputHandle('BIRTH_YEAR', e) }} />
        </div>
        <input  type="submit"
                name="signupSubmit"
                value="SIGN UP FOR FREE"
                disabled={
                  !this.state.validFirstName ||
                  !this.state.validLastName ||
                  !this.state.validUsername ||
                  !this.state.validPassword ||
                  !this.state.validGender ||
                  !this.state.validBMonth ||
                  !this.state.validBDay ||
                  !this.state.validBYear
                } />
      </form>
    )
  }
})

module.exports = SignUpForm;
