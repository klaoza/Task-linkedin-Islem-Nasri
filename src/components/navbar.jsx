import React from 'react';
import './navabr.css';

function Navbar({ imgUrl }) {
  return (
    <div className='navbar'>
      <img src={imgUrl} alt="Logo" className="logo" />
      <a href="#Articles">Articles</a>
      <a href="#Personnes">Personnes</a>
      <a href="#learning">LinkedIn Learning</a>
      <a href="#emploi">Offres d'emploi</a>
      <a href="#signup">S'inscrire</a>
      <a href="#signin" className='iden'>S'identifier</a>
    </div>
  );
}

export default Navbar;
