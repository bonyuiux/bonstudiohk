import Reveal from "./Reveal";

const steps = [
  { title: "Say hello", text: "Message me on WhatsApp with the date, the place and who’s coming. I’ll reply with ideas and a quote." },
  { title: "Plan it together", text: "We choose the location and the time of day for the softest light, and talk through the feeling you want." },
  { title: "Shoot & receive", text: "A relaxed session with gentle direction — no stiff poses. Then your edited photos are delivered for you to keep." },
];

/** "How it works" — three steps, shown on service pages. */
export default function Process() {
  return (
    <section className="container-site pt-section">
      <Reveal>
        <h2 className="t-title">How it works</h2>
      </Reveal>
      <ol className="mt-8 grid gap-10 md:grid-cols-3 md:gap-8">
        {steps.map((s, i) => (
          <li key={s.title} className="border-t border-line pt-6">
            <Reveal delay={i * 0.08}>
              <h3 className="t-heading">
                <span className="text-accent-soft">{i + 1}.</span> {s.title}
              </h3>
              <p className="t-body mt-2 text-muted">{s.text}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
