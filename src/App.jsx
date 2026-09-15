import { Routes, Route, Navigate } from "react-router-dom";

import SalamNgCaseStudy from "./SalamNg";
import SwiftGoCaseStudy from "./SwiftGo";


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
      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* SalamNg Case Study */}
      <Route
        path="/projects/salamng"
        element={<SalamNgCaseStudy />}
      />

      {/* SwiftGo Case Study */}
      <Route
        path="/projects/swiftgo"
        element={<SwiftGoCaseStudy />}
      />

      {/* Unknown URLs */}
      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />
    </Routes>
  );
}

export default App;
