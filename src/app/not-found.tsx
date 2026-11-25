import ButtonLink from "@/components/ButtonLink";

export default function NotFound() {
  return (
    <section className="container-site flex min-h-[80svh] flex-col items-center justify-center pb-24 pt-40 text-center">
      <h1 className="t-title">This page wandered off.</h1>
      <p className="t-body mt-6 max-w-[36ch] text-muted">The page you’re looking for isn’t here. Try one of these instead.</p>
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <ButtonLink href="/" tone="solid">Home</ButtonLink>
        <ButtonLink href="/portrait">Portrait</ButtonLink>
        <ButtonLink href="/contact">Contact</ButtonLink>
      </div>
    </section>
  );
}
