import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { ToastContainer } from 'react-toastify';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { connect } from 'react-redux';
import { signUp } from 'Actions/signupActions';




class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {
        firstname: '',
        lastname: '',
        email: '',
        phoneNumber: '',
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
    const { firstname, lastname, password, email, phoneNumber } = user;
    const { dispatch } = this.props;
    if (firstname && lastname && password && email && phoneNumber) {
      dispatch(signUp(user));
    }
  }
  render() {
    const { firstname, lastname, password, email, phoneNumber } = this.state.user;
    const { handleChange, handleSubmit } = this;
    const { loading } = this.props;
    return (
      <div>

        <Header />

        <section id="register">
          <div className="formregister">
            <form className="signup" autoComplete="on">
              <h2 id="signupheader">Create an Account</h2>
              <div>
                <label htmlFor="first">Firstname:</label>
                <br />
                <input
                  id="first"
                  type="text"
                  placeholder="Firstname"
                  maxLength="40"
                  required
                  name="firstname"
                  value={firstname}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Lastname:</label>
                <br />
                <input
                  type="text"
                  placeholder="Lastname"
                  maxLength="40"
                  required
                  name="lastname"
                  value={lastname}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Email:</label>
                <br />
                <input
                  type="text"
                  placeholder="Email Address"
                  maxLength="60"
                  required
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Phone Number:</label>
                <br />
                <input
                  type="text"
                  placeholder="Phone"
                  maxLength="15"
                  required
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Password:</label>
                <br />
                <input
                  type="password"
                  placeholder="Password"
                  maxLength="40"
                  required
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
              </div>

              <div>
                <Button className="button_1" onClick={handleSubmit} loading={loading} type="submit">SignUp</Button><br />
                Already have an account?
              {' '}
                <Link to="/login">Login</Link>
              </div>

            </form>
          </div>
        </section>


        <Footer />
        <ToastContainer position="top-center" />
      </div>
    );
  }
};

function mapStateToProps(state) {
  const { loading } = state.AuthReducer;
  return {
    loading
  };
}

export default connect(mapStateToProps)(SignUp);


