export default function Hero() {
  return (
    <section id="home" className="hero">
      <div style={{ textAlign: "center", maxWidth: 1024 }}>
        <h1>Animesh Kumar</h1>
        <p className="tag">
          SAP S/4HANA Procurement certified consultant with 7+ years in Materials
          Management — helping enterprises streamline procurement, inventory, and P2P
          with measurable business impact.
        </p>
        <div className="buttons">
          <a href="#projects" className="btn">View Projects</a>
          <a href="#contact" className="btn" style={{ background: "transparent", color: "var(--fg)", border: "1px solid rgba(132,204,22,.35)" }}>Contact Me</a>
        </div>
      </div>
    </section>
  );
}
