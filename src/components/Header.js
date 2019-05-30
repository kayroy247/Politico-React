import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div>
    <div className="nav">
      <div className="nav-header">
        <div className="nav-title">
          <Link to="/">Politico</Link>
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
        <Link to="/login">login</Link>
        <Link to="/signup">SignUp</Link>
      </div>
    </div>
  </div>
);

export default Header;
