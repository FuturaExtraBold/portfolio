import { Ref, type JSX, type ReactNode } from "react";
import classnames from "classnames";
import "./styles.scss";

interface BackgroundProps {
  children: ReactNode;
  className?: string;
  ref?: Ref<HTMLDivElement>;
}

export default function Background({
  children,
  className = "",
  ref = null,
}: BackgroundProps): JSX.Element {
  const backgroundClass = classnames("background", {
    [`${className}`]: className,
  });

  return (
    <div className={backgroundClass} ref={ref}>
      {children}
    </div>
  );
}
