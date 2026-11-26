import Shell from "@/components/Shell";
import PageHead from "@/components/PageHead";
import Btn from "@/components/Btn";

export default function NotFound() {
  return (
    <Shell>
      <PageHead title="Nothing here.">This page may have moved. Everything else is in the menu.</PageHead>
      <div className="mt-block">
        <Btn href="/">Go to home</Btn>
      </div>
    </Shell>
  );
}
