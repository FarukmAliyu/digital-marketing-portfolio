import { Routes, Route } from "react-router-dom";
import SalamNgCaseStudy from "./SalamNgCaseStudy";
import AgroAICaseStudy from "./AgroAICaseStudy";

import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Analytics from "./Analytics";
import Contact from "./Contact";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Analytics />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      {/* Home Page */}
      <Route path="/" element={<Home />} />

      {/* SalamNG Case Study */}
      <Route
        path="/projects/salamng"
        element={<SalamNgCaseStudy />}
      />

      {/* AgroAI Case Study */}
      <Route
        path="/projects/agroai"
        element={<AgroAICaseStudy />}
      />
    </Routes>
  );
}

export default App;