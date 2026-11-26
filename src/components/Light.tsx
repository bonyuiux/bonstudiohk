/** Decorative window light on the wall (see globals.css). Put inside an element with class "has-light". */
export default function Light({ dark }: { dark?: boolean }) {
  return (
    <div className={`light ${dark ? "light--dark" : ""}`} aria-hidden>
      <div className="light__shade" />
      <div className="light__pane" />
    </div>
  );
}
