import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { ToastContainer } from 'react-toastify';
import { logIn } from 'Actions/loginActions';
import Header from '../components/Header';
import Footer from '../components/Footer';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: '',
        password: ''
      },
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { user } = this.state;

    this.setState({ submitted: true });
    const { password, email } = user;
    const { dispatch } = this.props;
    if (password && email) {
      dispatch(logIn(user));
    }
  }

  render() {
    const { user } = this.state;
    const { password, email } = user;
    const { handleChange, handleSubmit } = this;
    const { loading } = this.props;
    return (
      <div>
        <Header />

        <section id="register">
          <div className="formregister">
            <form className="signup" autoComplete="on">
              <h2 id="signupheader">Login</h2>

              <div>
                <label>Email:</label>
                <br />
                <input
                  type="email"
                  placeholder="Email Address"
                  maxLength="60"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Password:</label>
                <br />
                <input
                  type="password"
                  placeholder="Password"
                  maxLength="40"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  required
                />
                <br />
                Forgot password?
                <a href="resetPassword.html"> Reset Password</a>
              </div>

              <div>
                <Button className="button_1" onClick={handleSubmit} loading={loading} type="submit">Login</Button>
              </div>
              <div>
                Dont have an account?
                {' '}
                <Link to="/signup">SignUp</Link>
              </div>
            </form>
          </div>
        </section>


        <Footer />
        <ToastContainer position="top-center" />
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { loading } = state.loginReducer;
  return {
    loading
  };
}

export default connect(mapStateToProps)(Login);
