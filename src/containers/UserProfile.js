import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { ToastContainer } from 'react-toastify';
import { connect } from 'react-redux';
import { signUp } from 'Actions/signupActions';
import Header from '../components/Header';
import Footer from '../components/Footer';


const UserProfile = () => (
  <div>
    <div className="nav">
      <div className="nav-header">
        <div className="nav-title">
          <a href="index.html">Politico</a>
        </div>
      </div>
      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span />
          <span />
          <span />
        </label>
      </div>
      <input type="checkbox" id="nav-check" />
      <div className="nav-links">
        <a href="index.html">Home</a>
        <a href="expressInterest.html">Express Interest</a>
        <a href="electionResults.html">Election Results</a>
        <a href="allParties.html">View Parties</a>
        <a href="vote.html">Vote</a>
        <a href="index.html">LogOut</a>
      </div>
    </div>

    <section id="register">
      <div className="card">
        <img src="../assets/images/regist.jpg" alt="profile" />
        <h3>Kayode Okunlade</h3>
        <p>kayode123@gmail.com</p>
        <p>
          <button type="button">
            Edit information
          </button>
        </p>
      </div>
      <h1> My votes</h1>
      <div className="res">
        <table>
          <tr>
            <th>Serial N0</th>
            <th>Office</th>
            <th>Candidate (PARTY)</th>
            <th>View Each</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Presidential</td>
            <td>Alhaji Mohammadu Buhari (APC)</td>
            <td><a href="#">Details</a></td>
          </tr>
          <tr>
            <td>2</td>
            <td>Governorship</td>
            <td>Jimi Abaje (PDP)</td>
            <td><a href="#">Details</a></td>
          </tr>

        </table>
      </div>
    </section>

    <Footer />
  </div>
);

export default UserProfile;
