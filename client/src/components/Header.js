import React from 'react';
import { Link } from 'react-router-dom';

const s = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    padding: 4,
  },
  link: {
    padding: 4,
  },
};

function Header() {
  return (
    <div style={s.container}>
      <Link style={s.link} to="/">
        Home
      </Link>
      <Link style={s.link} to="/signup">
        Signup
      </Link>
      <Link style={s.link} to="/login">
        Login
      </Link>
      <Link style={s.link} to="/Counter">
        Counter
      </Link>
    </div>
  );
}

export default Header;
