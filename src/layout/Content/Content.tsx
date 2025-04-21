import { Ref, type JSX, type ReactNode } from "react";
import classnames from "classnames";
import "./styles.scss";

interface ContentProps {
  children: ReactNode;
  className?: string;
  ref?: Ref<HTMLDivElement>;
}

export default function Content({
  children,
  className = "",
  ref = null,
}: ContentProps): JSX.Element {
  const contentClass = classnames("content", {
    [`${className}`]: className,
  });

  return (
    <div className={contentClass} data-testid="content" ref={ref}>
      {children}
    </div>
  );
}
