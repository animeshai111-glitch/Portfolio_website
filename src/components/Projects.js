import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="container my-5">
      <h2 className="section-title">Key Projects</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="card p-3 shadow-sm mb-3"> {/* Added mb-3 for spacing */}
            <h5>MSR Report</h5>
            <p>Designed and implemented a custom Monthly Stock Requirement report to track serial material lifecycle for suppliers.</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card p-3 shadow-sm mb-3">
            <h5>Claim Management Optimization</h5>
            <p>Improved claim handling in SAP MM-Ariba integration for ArcelorMittal, reducing downtime and errors.</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card p-3 shadow-sm mb-3">
            <h5>Claim Management Optimization</h5>
            <p>Improved claim handling in SAP MM-Ariba integration for ArcelorMittal, reducing downtime and errors.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;