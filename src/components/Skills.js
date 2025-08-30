import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="container my-5">
      <h2 className="section-title">Skills & Certifications</h2>
      <div>
        <span className="skill-badge">SAP MM</span>
        <span className="skill-badge">SAP QM</span>
        <span className="skill-badge">SAP EWM</span>
        <span className="skill-badge">SAP SD</span>
        <span className="skill-badge">EHSM</span>
        <span className="skill-badge">Ariba</span>
        <span className="skill-badge">Enovia PLM</span>
        <span className="skill-badge">Power BI</span>
        <span className="skill-badge">Advanced Excel</span>
      </div>
      <h4 className="mt-4">Certifications</h4>
      <ul>
        <li>SAP Certified Application Associate – SAP S/4HANA Sourcing & Procurement</li>
        <li>Advanced Leadership & Communication – Toastmasters International</li>
      </ul>
    </section>
  );
};

export default Skills;