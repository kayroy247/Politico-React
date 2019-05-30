import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';


const SignUp = () => (
  <div>

    <Header />

    <section id="register">
      <div className="formregister">
        <form className="signup" autoComplete="on">
          <h2 id="signupheader">Create an Account</h2>
          <div>
            <label>Firstname:</label>
            <br />
            <input
              type="text"
              placeHolder="Firstname"
              maxLength="40"
              required
            />
          </div>
          <div>
            <label>Lastname:</label>
            <br />
            <input type="text" placeHolder="Lastname" maxLength="40" required />
          </div>
          <div>
            <label>Email:</label>
            <br />
            <input
              type="text"
              placeHolder="Email Address"
              maxLength="60"
              required
            />
          </div>
          <div>
            <label>Phone Number:</label>
            <br />
            <input
              type="text"
              placeHolder="Phone"
              maxLength="15"
              required
            />
          </div>
          <div>
            <label>Password</label>
            <br />
            <input
              type="password"
              placeHolder="Password"
              maxLength="40"
              required
            />
          </div>

          <div>
            <button className="button_1" onClick="location.href='userProfile.html'" type="submit">SignUp</button>
                            Already have an account?
            {' '}
            <Link to="/login">Login</Link>
          </div>

        </form>
      </div>
    </section>


    <Footer />
  </div>
);

export default SignUp;
