import Section from "./Section";
import TextBlock from "./TextBlock";

const steps = [
  { title: "Say hello", text: "Message me on WhatsApp with the date, the place and who’s coming. I’ll reply with ideas and a quote." },
  { title: "Plan it together", text: "We choose the location and the time of day for the softest light, and talk through the feeling you want." },
  { title: "Shoot & receive", text: "A relaxed session with gentle direction — no stiff poses. Then your edited photos are delivered for you to keep." },
];

/** "How it works" — a title, then numbered rows. */
export default function Process() {
  return (
    <Section label="How it works">
      <TextBlock title="How it works" />
      <ol className="mt-block max-w-text border-b border-line">
        {steps.map((s, i) => (
          <li key={s.title} className="border-t border-line py-stack">
            <TextBlock as="h3" size="heading" index={`0${i + 1}`} title={s.title}>
              {s.text}
            </TextBlock>
          </li>
        ))}
      </ol>
    </Section>
  );
}
