import React from 'react';

const Header = () => {
  const headerStyle = {
    backgroundColor: '#D3D3D3',
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Georgia, serif',
    fontSize: '15px',
    letterSpacing: '1px',
  };

  const linkStyle = {
    textDecoration: 'underline',
    color: 'blue',
    marginRight: '10px',
  };

  return (
    <header style={headerStyle}>
      <a href="#" style={linkStyle}>Home</a>
      <a href="#" style={linkStyle}>About</a>
      <a href="#" style={linkStyle}>Get Involved</a>
      <a href="#" style={linkStyle}>MemberSHPE Gallery</a>
      <a href="#" style={linkStyle}>Our Sponsors</a>
    </header>
  );
};

export default Header;