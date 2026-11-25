import Shell from "@/components/Shell";
import PageHead from "@/components/PageHead";
import Section from "@/components/Section";
import ServiceList from "@/components/ServiceList";
import Process from "@/components/Process";
import CtaBand from "@/components/CtaBand";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Photography Services in Hong Kong — Portrait, Wedding, Event & Commercial",
  description: "Portrait, couple, family, pet, pre-wedding, wedding, event and commercial photography in Hong Kong by Bon Studio.",
  path: "/service",
});

export default function Service() {
  return (
    <Shell>
      <PageHead title="Moments with the people who matter." summary="From a one-hour city walk to a full wedding day — every session is calm, natural and planned around the best light." />
      <Section label="Services">
        <ServiceList />
      </Section>
      <Process />
      <CtaBand />
    </Shell>
  );
}
