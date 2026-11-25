import type { CSSProperties, ReactNode } from "react";

/**
 * The ONE text pattern of the site (reference: the Portrait service block).
 *   index   t-small number or label, accent-soft      ↓ stack (24)
 *   title   t-title (or t-heading when small)          ↓ stack (24)
 *   summary t-body in ink — the one-line point         ↓ tight (8)
 *   detail  t-body in muted — the rest                 ↓ block (40)
 *   action  a line link or button
 */
export default function TextBlock({
  index,
  title,
  summary,
  children,
  action,
  as: Tag = "h2",
  size = "title",
  className = "",
  delay = 0,
}: {
  index?: ReactNode;
  title: ReactNode;
  summary?: ReactNode;
  children?: ReactNode;
  action?: ReactNode;
  as?: "h1" | "h2" | "h3";
  size?: "display" | "title" | "heading";
  className?: string;
  delay?: number;
}) {
  const d = (n: number) => ({ "--d": `${delay + n * 80}ms` }) as CSSProperties;
  return (
    <div className={`max-w-text ${className}`}>
      {index != null && (
        <p data-reveal="text" style={d(0)} className="t-small mb-stack tabular-nums text-accent-soft">
          {index}
        </p>
      )}
      <Tag data-reveal="text" style={d(1)} className={size === "display" ? "t-display" : size === "heading" ? "t-heading" : "t-title"}>
        {title}
      </Tag>
      {summary && (
        <p data-reveal="text" style={d(2)} className="t-body mt-stack text-ink">
          {summary}
        </p>
      )}
      {children && (
        <div data-reveal="text" style={d(3)} className={`t-body text-muted ${summary ? "mt-tight" : "mt-stack"}`}>
          {children}
        </div>
      )}
      {action && (
        <div data-reveal="text" style={d(4)} className="mt-block">
          {action}
        </div>
      )}
    </div>
  );
}
