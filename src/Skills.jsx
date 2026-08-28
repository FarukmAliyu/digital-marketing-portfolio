const skillGroups = [
  {
    title: "Digital Marketing",
    skills: [
      "Digital Strategy",
      "Social Media Marketing",
      "Content Strategy",
      "Customer Acquisition",
      "Lead Generation",
      "Business Growth",
    ],
  },
  {
    title: "Data & Analytics",
    skills: [
      "Marketing Analytics",
      "Excel",
      "KPI Development",
      "Data Analysis",
      "Dashboard Design",
      "Data Visualization",
    ],
  },
  {
    title: "AI & Technology",
    skills: [
      "AI Tools",
      "Prompt Engineering",
      "React",
      "JavaScript",
      "Website Development",
      "Digital Solutions",
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <p className="section-label">02 / SKILLS</p>

        <h2 className="section-title">
          A combination of marketing, analytics and technology.
        </h2>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-card" key={group.title}>
              <h3>{group.title}</h3>

              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;