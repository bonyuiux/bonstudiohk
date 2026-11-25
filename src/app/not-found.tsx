import Btn from "@/components/Btn";

export default function NotFound() {
  return (
    <section className="ty">
      <h1 className="ty__title">This page could not be found.</h1>
      <Btn href="/" variant="brown-tall" className="ty__btn" arrow={false}>
        Go to home
      </Btn>
    </section>
  );
}
