import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import { ToastProvider } from "./components/Toast.jsx";

export default function App() {
  return (
    <ToastProvider>
      <header className="site-header">
        <a href="#" className="brand">Animesh Kumar</a>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact" className="btn">Contact</a>
        </nav>
      </header>

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <footer className="footer">
        © 2025 Animesh Kumar | Built with AI-powered tools
      </footer>
    </ToastProvider>
  );
}
