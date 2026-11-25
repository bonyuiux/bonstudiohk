import Band from "./Band";

const steps = [
  { title: "Say hello", text: "Message me on WhatsApp with the date, the place and who’s coming. I’ll reply with ideas and a quote." },
  { title: "Plan it together", text: "We choose the location and the time of day for the softest light, and talk through the feeling you want." },
  { title: "Shoot & receive", text: "A relaxed session with gentle direction — no stiff poses. Then your edited photos are delivered for you to keep." },
];

/** "How it works" — three steps on the content line. */
export default function Process() {
  return (
    <Band rail="Process" className="py-section">
      <h2 data-reveal="text" className="axis-text t-title">
        How it works
      </h2>
      <ol className="axis-text space-y-10">
        {steps.map((s, i) => (
          <li key={s.title} data-reveal="text" className="grid grid-cols-[40px_1fr] gap-x-4 border-t border-line pt-6">
            <span className="t-heading tabular-nums text-accent-soft">{i + 1}</span>
            <div>
              <h3 className="t-heading">{s.title}</h3>
              <p className="t-body mt-2 text-muted">{s.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </Band>
  );
}
