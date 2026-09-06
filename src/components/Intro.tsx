import introImage from "../assets/myself.jpg";

const ABOUT_ME_PARAGRAPHS = [
  <>I am <strong>Vihanga C. Kumanayaka</strong>, a third-year <strong>B.Sc. (Hons) Mechanical Engineering undergraduate specializing in Mechatronic Systems Engineering at the University of Moratuwa, Sri Lanka</strong>. I am passionate about understanding how mechanical, electronic, and computational systems can be brought together to create intelligent and practical engineering solutions. My technical interests and experience span <strong>robotics, autonomous systems, mechanical engineering design, finite element analysis (FEA), embedded systems, sensor integration, computer vision, and electronic circuit design</strong>. I particularly enjoy working at the boundaries between disciplines, where solving a problem requires both engineering fundamentals and the willingness to explore unfamiliar technologies.</>,
  <>Beyond engineering, I value the qualities that enable ideas to become meaningful results. I am a <strong>hard-working, driven, and team-oriented individual</strong> who is comfortable stepping into unfamiliar territories, learning from the ground up, and pushing forward until a solution is found. My involvement in the <strong>University of Moratuwa Karate Team</strong> has strengthened my discipline, perseverance, ability to perform under pressure, and commitment to continuous improvement. I have been awarded <strong>University of Moratuwa Colours for two consecutive years</strong> for my performance in karate, experiences that have shaped the way I approach both individual and team challenges.</>,
  <>I am driven by curiosity, a willingness to learn, and the desire to continuously become a better engineer. Whether I am exploring a new technical concept, contributing to a team, or working through a difficult engineering problem, I approach it with determination and an open mind. <strong>I see every challenge as an opportunity to learn, build, and move forward.</strong> I invite you to explore my work and discover the experiences, skills, and engineering mindset behind the projects I have developed.</>,
];

export function Intro() {
  return (
    <section
      id="about"
      className="intro"
      aria-labelledby="intro-title"
    >
      <div className="intro-container">
        <div className="intro-image-wrapper">
          <div className="intro-image-tile">
            <img
              src={introImage}
              alt="Vihanga C. Kumanayaka introduction showcase"
              className="intro-image"
              loading="lazy"
            />
          </div>
        </div>
        <h2 id="intro-title" className="intro-title">
          Who am I ?
        </h2>
        {ABOUT_ME_PARAGRAPHS.map((paragraph, i) => (
          <p key={i} className="intro-text">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}