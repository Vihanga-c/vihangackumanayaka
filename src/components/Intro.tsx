import introImage from "../assets/myself.jpg";

const ABOUT_ME_PARAGRAPHS = [
  <>I am <strong>Vihanga C. Kumanayaka</strong>, a third-year <strong>B.Sc. (Hons) Mechanical Engineering undergraduate specializing in Mechatronic Systems Engineering at the University of Moratuwa, Sri Lanka</strong>. I am passionate about understanding how mechanical, electronic, and computational systems can be brought together to create intelligent and practical engineering solutions. My technical interests and experience span <strong>robotics, autonomous systems, mechanical engineering design, finite element analysis (FEA), embedded systems, sensor integration, computer vision, and electronic circuit design</strong>. I particularly enjoy working at the boundaries between disciplines, where solving a problem requires both engineering fundamentals and the willingness to explore unfamiliar technologies.</>,
  <>I place a strong emphasis on my academic journey and approach my studies with genuine enthusiasm and a desire to understand concepts beyond what is simply required. I currently maintain a <strong>GPA of 3.69/4.00</strong> and was selected for the <strong>Dean's List for academic excellence in my third semester</strong>. To me, academic achievement is not merely a measure of performance, but a reflection of the effort I invest in understanding what I study and applying that knowledge meaningfully. I am naturally inclined to explore the <em>why ?</em> behind engineering principles, which drives me to engage deeply with my academic work and continually broaden my understanding across different areas of engineering. I enjoy challenging myself with new concepts, making connections between disciplines, and turning theoretical knowledge into practical understanding.</>,
  <>Beyond engineering, I value the qualities that enable ideas to become meaningful results. I am a <strong>hard-working, driven, and team-oriented individual</strong> who is comfortable stepping into unfamiliar territories, learning from the ground up, and working persistently toward a solution. My involvement in the <strong>University of Moratuwa Karate Team</strong> has strengthened my discipline, perseverance, ability to perform under pressure, and commitment to continuous improvement. I have been awarded <strong>University of Moratuwa Colours for two consecutive years</strong> for my performance in karate, experiences that have shaped the way I approach both individual and team challenges.</>,
  <>I am motivated by the opportunity to keep growing as an engineer, both through technical challenges and through the people I work with. Whether I am exploring a new engineering concept, contributing to a team, or tackling a complex problem, I approach each experience with an open mind and a willingness to put in the work required to move forward. <strong>I see every challenge as an opportunity to learn, build, and grow.</strong> I invite you to explore my work and discover the experiences, skills, and engineering mindset behind the projects I have developed.</>,
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