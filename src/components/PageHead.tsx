import type { ReactNode } from "react";
import TextBlock from "./TextBlock";

/** Top of every inner page. Starts level with the sidebar logo on desktop. */
export default function PageHead({ index, title, summary, children, action }: { index?: ReactNode; title: ReactNode; summary?: ReactNode; children?: ReactNode; action?: ReactNode }) {
  return (
    <header className="pb-section pt-page-top">
      <TextBlock as="h1" index={index} title={title} summary={summary} action={action}>
        {children}
      </TextBlock>
    </header>
  );
}
