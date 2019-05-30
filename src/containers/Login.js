import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';


const Login = () => (
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
              type="text"
              placeholder="Email Address"
              maxLength="60"
              required
            />
          </div>
          <div>
            <label>Password</label>
            <br />
            <input
              type="password"
              placeholder="Password"
              maxLength="40"
              required
            />
            <br />
                            Forgot password?
            <a href="resetPassword.html"> Reset Password</a>
          </div>

          <div>
            <button className="button_1" onClick="location.href='adminDashboard.html'" type="button">Login</button>
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
  </div>
);

export default Login;
