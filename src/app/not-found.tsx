import Shell from "@/components/Shell";
import PageHead from "@/components/PageHead";
import Btn from "@/components/Btn";

export default function NotFound() {
  return (
    <Shell>
      <PageHead title="This page could not be found.">It may have moved. The menu has everything else.</PageHead>
      <div className="mt-block">
        <Btn href="/">Go to home</Btn>
      </div>
    </Shell>
  );
}
