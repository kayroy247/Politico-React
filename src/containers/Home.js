import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import Header from '../components/Header';
import Footer from '../components/Footer';


const Home = () => (
  <div>
    <Header />

    <section id="showcase">
      <div id="topic" className="container">
        <h3>YOUR VOTE IS YOUR POWER</h3>
        <p> Online voting system built on integrity</p>
        <div className="mybuttons1">
          <button className="button_1" type="button"><Link to="/signup">Signup</Link></button>
        </div>
      </div>
    </section>
    <div className="space-it" style={{ color: 'bule ', textAlign: 'center' }}>
      <h2 style={{ color: 'bule !important' }}>3 Steps to use politico</h2>
    </div>
    <section className="home-cards">
      <div className="home-box">
        <img src="https://imgur.com/EcLWUav.png" />
        <div className="home-box__text">
          <h3>1. Register</h3>
        </div>
      </div>
      <div className="home-box">
        <img src="https://imgur.com/tGtabqB.png" />
        <div className="home-box__text">
          <h3>2. Vote</h3>
        </div></div>
      <div className="home-box">
        <img src="https://imgur.com/4X0Al3L.png" />
        <div className="home-box__text">
          <h3>3. View Result</h3>
        </div></div>
    </section>

    <Footer />
  </div>
);

export default Home;
