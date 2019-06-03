import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Search } from 'semantic-ui-react';

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
        <Link className="a" to="/login">
          <Icon name="sign-in" />
          Login
        </Link>
        <Link className="a" to="/signup">
          <Icon name="signup" />
          Signup
        </Link>
      </div>
    </div>
  </div>
);

export default Header;
