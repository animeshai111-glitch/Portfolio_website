import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="container my-5 text-center">
      <h2 className="section-title">Contact Me</h2>
      <p>📍 Bihar, India | 🌐 Languages: English, Hindi, Bhojpuri</p>
      <a href="mailto:akpersonal.3@gmail.com" className="btn btn-primary me-2">📧 Email</a> {/* Added me-2 for margin */}
      <a href="https://www.linkedin.com/in/animesh-kumar-67b5bb111" target="_blank" className="btn btn-dark">💼 LinkedIn</a>
    </section>
  );
};

export default Contact;