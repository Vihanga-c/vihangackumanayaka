const PLACEHOLDER_PARAGRAPHS = [
  "Velocities collide with gradients wherever systems learn to hum, and between static laws and dynamic dreams the machinery of intent keeps turning. Resilience polishes friction into torque, while iterative discipline converts scattered sketches into shipping artifacts.",
  "Amplitude is not noise when the waveform is deliberate — every prototype whispers a hypothesis, every deployment answers it. Constant refactoring sharpens the lens; curiosity fuels the burner, and craftsmanship becomes the torque that moves the whole assembly forward.",
];

export function Intro() {
  return (
    <section className="intro" aria-labelledby="intro-title">
      <div className="intro-content">
        <h2 id="intro-title" className="intro-title">
          intro of me
        </h2>
        {PLACEHOLDER_PARAGRAPHS.map((text, i) => (
          <p key={i} className="intro-text">
            {text}
          </p>
        ))}
      </div>
    </section>
  );
}