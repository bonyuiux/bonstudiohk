import type { ReactNode } from "react";

/** Title (display) and its paragraph, 16px apart. The only page heading pattern. */
export default function PageHead({ title, children, as: Tag = "h1" }: { title: ReactNode; children?: ReactNode; as?: "h1" | "h2" }) {
  return (
    <div className="measure pagehead">
      <Tag className="t-display">{title}</Tag>
      {children && <div className="t-body mt-near">{children}</div>}
    </div>
  );
}
