import { Ref, type JSX, type ReactNode } from "react";
import classnames from "classnames";
import "./styles.scss";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  ref?: Ref<HTMLDivElement>;
}

export default function Container({
  children,
  className = "",
  ref = null,
}: ContainerProps): JSX.Element {
  const containerClass = classnames("container", {
    [`${className}`]: className,
  });

  return (
    <div className={containerClass} ref={ref}>
      {children}
    </div>
  );
}
