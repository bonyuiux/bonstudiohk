/** Re-mounts on every navigation, so each page arrives with a soft crossfade. */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-in">{children}</div>;
}
