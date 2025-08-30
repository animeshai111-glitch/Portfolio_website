import { useState } from "react";
import { useToast } from "./Toast.jsx";

const FORM_ENDPOINT = "https://formspree.io/f/xxxx"; // replace with your real endpoint

export default function Contact() {
  const { toast } = useToast();
  const [sending, setSending] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = data.get("name")?.toString().trim();
    const email = data.get("email")?.toString().trim();
    const message = data.get("message")?.toString().trim();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email || "");

    if (!name || !emailOk || !message) {
      toast("Please provide a valid name, email, and message.", "error");
      return;
    }

    setSending(true);
    try {
      const res = await fetch(FORM_ENDPOINT, { method: "POST", headers: { Accept: "application/json" }, body: data });
      if (res.ok) { form.reset(); toast("✅ Thanks! Your message has been sent.", "success"); }
      else { toast("❌ Something went wrong. Please try again later.", "error"); }
    } catch {
      toast("⚠️ Network error. Please try again.", "error");
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="container">
      <h2 className="section-title">Contact</h2>
      <form onSubmit={handleSubmit} className="card grid two" noValidate>
        <label>
          <span>Name</span>
          <input name="name" type="text" placeholder="Your name" required />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" placeholder="you@example.com" required />
        </label>
        <label className="card" style={{ gridColumn: "1 / -1" }}>
          <span>Message</span>
          <textarea name="message" rows="5" placeholder="Tell me how I can help…" required />
        </label>
        <input type="text" name="_gotcha" style={{ display: "none" }} aria-hidden="true" />
        <button type="submit" disabled={sending}>{sending ? "Sending..." : "Send Message"}</button>
      </form>
    </section>
  );
}
