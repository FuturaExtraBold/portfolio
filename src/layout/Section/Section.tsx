import { type JSX } from "react";

interface SectionProps {
  children: JSX.Element;
  className: string;
}

export default function Section({
  children,
  className,
}: SectionProps): JSX.Element {
  return <section className={className}>{children}</section>;
}
