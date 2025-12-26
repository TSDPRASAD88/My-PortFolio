import "./Achievements.css";

const achievements = [
  {
    title: "Oracle Cloud AI Foundations Certified",
    description:
      "Earned certification demonstrating foundational knowledge in AI and cloud concepts.",
  },
  {
    title: "API Proficiency Badge – Postman",
    description:
      "Demonstrated expertise in REST API testing, collections, and environment management.",
  },
  {
    title: "Campus Technical Lead",
    description:
      "Conducted workshops and mentored juniors in web development and problem-solving.",
  },
  {
    title: "Exploring AI & MLOps",
    description:
      "Hands-on experience with RAG pipelines, LangChain, and ML system workflows.",
  },
];

const Achievements = () => {
  return (
    <section className="achievements" id="achievements">
      <h2 className="section-title">Achievements & Activities</h2>

      <div className="achievements-grid">
        {achievements.map((item, index) => (
          <div className="achievement-card" key={index}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
