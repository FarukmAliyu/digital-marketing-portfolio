import { ArrowUpRight } from "lucide-react";

function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-grid">
        <p className="section-label">01 / ABOUT ME</p>

        <div>
          <h2>
            Marketing is more powerful when creativity meets data.
          </h2>

          <p className="about-text">
            I'm Faruk Muktar Aliyu, a digital marketing and technology professional
            interested in the intersection of marketing, data and artificial
            intelligence.
          </p>

          <p className="about-text">
            My approach combines creative thinking with analytical problem
            solving, from developing digital strategies and content ideas to
            understanding customer journeys, measuring performance and using
            technology to improve business growth.
          </p>

          <a href="#projects" className="text-link">
            Explore my work
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;