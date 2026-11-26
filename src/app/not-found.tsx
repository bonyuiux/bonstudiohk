import Shell from "@/components/Shell";
import PageHead from "@/components/PageHead";
import Btn from "@/components/Btn";
import { notFound } from "@/content/pages";

export default function NotFound() {
  return (
    <Shell>
      <PageHead title={notFound.title}>{notFound.intro}</PageHead>
      <div className="mt-block">
        <Btn href="/">{notFound.button}</Btn>
      </div>
    </Shell>
  );
}
