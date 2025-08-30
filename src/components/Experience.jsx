import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="container my-5">
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        <div className="item">
          <h5><strong>LTIMindtree</strong> | CICP Project <small>(2024 – Present)</small></h5>
          <p>Managed SAP MM, QM & EHSM support; developed MSR & SNFE reports for material lifecycle.</p>
        </div>
        <div className="item">
          <h5><strong>Infosys</strong> | ArcelorMittal Trading <small>(2023 – 2024)</small></h5>
          <p>Improved trading domain processes with SAP Ariba integration, claim management, demand planning.</p>
        </div>
        <div className="item">
          <h5><strong>TCS</strong> | MRO Projects (IBERIA & BA) <small>(2018 – 2023)</small></h5>
          <p>Configured release strategies, Smart Form fixes, UAT support, ServiceNow incident handling.</p>
        </div>
        <div className="item">
          <h5><strong>TCS</strong> | GE Renewable Energy <small>(2015 – 2018)</small></h5>
          <p>Worked on Enovia PLM, product configuration, BOM lifecycle, ECO processes.</p>
        </div>
      </div>
    </section>
  );
};

export default Experience;