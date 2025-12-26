import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>

        <p className="about-intro">
          I’m a passionate Full Stack Developer focused on building scalable,
          efficient, and meaningful web applications. I enjoy transforming
          ideas into real-world products using clean architecture and modern
          technologies.
        </p>

        <div className="about-content">
          <div className="about-block">
            <h3>🎓 Education</h3>
            <p>
              B.Tech in Computer Science (Software Product Engineering)  
              <br />
              Godavari Global University (2024 – 2028)
            </p>
          </div>

          <div className="about-block">
            <h3>💡 What I Do</h3>
            <p>
              I specialize in Full Stack development using MERN, Java, and
              Python. I enjoy building secure APIs, working with databases,
              and exploring AI-driven solutions like RAG systems.
            </p>
          </div>

          <div className="about-block">
            <h3>🚀 My Focus</h3>
            <p>
              I aim to grow as a software engineer by building real-world
              applications, learning system design, and exploring scalable
              architectures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
