import "./Skills.css";
import { skillsData } from "../../data/skillsData";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills-grid">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div className="skill-card" key={category}>
            <h3>{category}</h3>
            <ul>
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
