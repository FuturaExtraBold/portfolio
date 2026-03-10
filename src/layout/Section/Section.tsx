import { type JSX,ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className: string;
}

export default function Section({
  children,
  className,
}: SectionProps): JSX.Element {
  return (
    <section className={className} data-testid="section">
      {children}
    </section>
  );
}
