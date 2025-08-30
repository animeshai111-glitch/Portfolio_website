export default function Experience() {
  return (
    <section id="experience" className="container">
      <h2 className="section-title">Experience</h2>

      <div className="card">
        <h3>LTIMindtree — SAP MM Functional Consultant</h3>
        <p className="muted">June 2024 – Present</p>
        <ul>
          <li>Support for SAP MM, QM, EHSM in CICP project</li>
          <li>Built MSR & SNFE reports for material lifecycle tracking</li>
          <li>Worked on BEL & HAL with P2P integrated to QM/EWM</li>
          <li>Issue management via ServiceNow</li>
        </ul>
      </div>

      <div className="card">
        <h3>Infosys — SAP MM Consultant (ArcelorMittal)</h3>
        <p className="muted">June 2023 – June 2024</p>
        <ul>
          <li>Supported AMS & ACE in trading domain</li>
          <li>Enhanced Claim Management, Demand Planning, P2P with Ariba</li>
          <li>Resolved IDoc issues; BASF implementation; AMS→ACE migration</li>
        </ul>
      </div>

      <div className="card">
        <h3>TCS — SAP MM Consultant (Iberia & British Airways)</h3>
        <p className="muted">Mar 2018 – Jun 2023</p>
        <ul>
          <li>Configured release strategy, storage locations, plant creation</li>
          <li>Smart Form fixes; year-end MM activities</li>
          <li>UT/IT/UAT test scripts for procurement & inventory</li>
        </ul>
      </div>

      <div className="card">
        <h3>TCS — PLM Consultant (GE Renewable Energy)</h3>
        <p className="muted">Sep 2015 – Feb 2018</p>
        <ul>
          <li>Enovia PLM for Product Config, BoM, ECM</li>
          <li>Wind Turbine product configuration; ECO process improvements</li>
          <li>Weekly/monthly client reporting</li>
        </ul>
      </div>
    </section>
  );
}
