import type { ReactNode } from "react";

/** Text with paragraphs separated by a blank line ("\n\n") becomes separate <p>s, 16px apart. */
export function Paras({ text, className = "" }: { text: string; className?: string }) {
  return (
    <>
      {text.split(/\n\s*\n/).map((t, i) => (
        <p key={i} className={`${className} ${i ? "mt-near" : ""}`.trim() || undefined}>
          {t}
        </p>
      ))}
    </>
  );
}

/** Title (display) and its paragraph(s), 16px apart. The only page heading pattern. */
export default function PageHead({ title, children, as: Tag = "h1" }: { title: ReactNode; children?: ReactNode; as?: "h1" | "h2" }) {
  return (
    <div className="measure pagehead">
      <Tag className="t-display">{title}</Tag>
      {children && <div className="t-body mt-near">{typeof children === "string" ? <Paras text={children} /> : children}</div>}
    </div>
  );
}
