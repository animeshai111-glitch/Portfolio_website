export default function Projects() {
  return (
    <section id="projects" className="container">
      <h2 className="section-title">Projects</h2>
      <div className="grid three">
        <article className="card">
          <h3>Procurement Lifecycle Optimization (CICP)</h3>
          <p>MSR & SNFE reports for serialized materials; improved inventory visibility.</p>
          <p className="muted">Tools: SAP MM, QM, EWM, ServiceNow</p>
        </article>
        <article className="card">
          <h3>Trading & Procurement Enhancement</h3>
          <p>Ariba-integrated P2P & claim management; IDoc reliability; BASF & AMS→ACE.</p>
          <p className="muted">Tools: SAP MM, Ariba, IDoc, Demand Planning</p>
        </article>
        <article className="card">
          <h3>MRO System Transformation</h3>
          <p>Release strategies, Smart Form fixes, year-end MM, UAT for aviation clients.</p>
          <p className="muted">Tools: SAP MM, Smart Forms, ServiceNow</p>
        </article>
      </div>
    </section>
  );
}
