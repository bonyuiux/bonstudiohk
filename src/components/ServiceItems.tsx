/** Brown name + black description rows (Service list, Hong Kong sessions). */
export default function ServiceItems({ items, page }: { items: { name: string; desc: string }[]; page?: boolean }) {
  return (
    <div className={`svc ${page ? "svc--page" : ""}`}>
      {items.map((s) => (
        <div key={s.name} className="svc__item">
          <h3 className="svc__name">{s.name}</h3>
          <p className="svc__desc t-16">{s.desc}</p>
        </div>
      ))}
    </div>
  );
}
