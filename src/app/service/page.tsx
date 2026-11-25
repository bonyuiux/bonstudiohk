import PageHead from "@/components/PageHead";
import ServiceSections from "@/components/ServiceSections";
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
    <>
      <PageHead rail="Service" title="Moments with the people who matter.">
        From a one-hour city walk to a full wedding day — every session is calm, natural and planned around the best light.
      </PageHead>
      <ServiceSections />
      <Process />
      <CtaBand />
    </>
  );
}
