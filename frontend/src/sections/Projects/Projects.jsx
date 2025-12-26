import "./Projects.css";

const projects = [
  {
    title: "Anime Stats & Watchlist Platform",
    description:
      "A full-stack MERN application that allows users to track anime, manage watchlists, and view detailed statistics using MyAnimeList API and OAuth.",
    tech: ["React", "Node.js", "MongoDB", "Express", "MyAnimeList API"],
    link: "https://github.com/kalviumcommunity/S89_DurgaPrasad_CapStone_AnimeStats",
  },
  {
    title: "AI Anime Companion",
    description:
      "AI-powered chatbot providing anime recommendations, summaries, and character insights using RAG and Gemini API.",
    tech: ["React", "Node.js", "LangChain", "Gemini API"],
    link: "https://github.com/kalviumcommunity/S89_AnimeCompanion",
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>

            <a href={project.link} target="_blank" rel="noreferrer">
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
