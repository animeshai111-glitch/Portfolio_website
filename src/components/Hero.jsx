import React from 'react';
import profilePic from '../assets/profile.jpg'; 

const Hero = () => {
  return (
    <section className="hero">
      <img src={profilePic} alt="Profile Photo" />
      <h1 className="fw-bold">Animesh Kumar</h1>
      <h3>SAP MM Functional Consultant | SAP Certified (C_TS452_2410)</h3>
      <p className="mt-3">Transforming procurement & inventory management with SAP expertise</p>
      <a href="mailto:akpersonal.3@gmail.com" className="btn btn-light mt-3">📧 Hire Me</a>
      <a href="https://www.linkedin.com/in/animesh-kumar-67b5bb111" target="_blank" rel="noopener noreferrer" className="btn btn-warning mt-3">💼 LinkedIn</a>
    </section>
  );
};

export default Hero;