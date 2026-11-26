/** Name (heading) + its description (body, muted), 8px apart; items 24px apart. */
export default function ServiceItems({ items }: { items: { name: string; desc: string }[] }) {
  return (
    <div className="items">
      {items.map((s) => (
        <div key={s.name}>
          <h3 className="t-heading">{s.name}</h3>
          <p className="t-body muted mt-tight">{s.desc}</p>
        </div>
      ))}
    </div>
  );
}
