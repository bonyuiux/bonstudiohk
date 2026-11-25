import Shell from "@/components/Shell";
import PageHead from "@/components/PageHead";
import LineLink from "@/components/LineLink";

export default function NotFound() {
  return (
    <Shell>
      <div className="min-h-[80svh]">
        <PageHead
          title="This page wandered off."
          summary="The page you’re looking for isn’t here. Try one of these instead."
          action={
            <ul className="space-y-tight">
              <li><LineLink href="/">Home</LineLink></li>
              <li><LineLink href="/portrait">Portrait</LineLink></li>
              <li><LineLink href="/contact">Contact</LineLink></li>
            </ul>
          }
        />
      </div>
    </Shell>
  );
}
