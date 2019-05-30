import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';


const Home = () => (
  <div>
    <Header />

    <section id="showcase">
      <div id="topic" className="container">
        <h1>Your Vote Is Your Power</h1>
        <p> Online Voting System Built on Integrity</p>
        <div className="mybuttons1">
          <button onClick="location.href='signup.html'" className="button_1" type="button"><Link to="/Signup">signup</Link></button>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Home;
