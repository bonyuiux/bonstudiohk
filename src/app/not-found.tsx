import PageHead from "@/components/PageHead";
import LineLink from "@/components/LineLink";

export default function NotFound() {
  return (
    <div className="min-h-[80svh]">
      <PageHead
        title="This page wandered off."
        action={
          <ul className="space-y-3">
            <li><LineLink href="/">Home</LineLink></li>
            <li><LineLink href="/portrait">Portrait</LineLink></li>
            <li><LineLink href="/contact">Contact</LineLink></li>
          </ul>
        }
      >
        The page you’re looking for isn’t here. Try one of these instead.
      </PageHead>
    </div>
  );
}
