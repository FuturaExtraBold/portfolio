import classnames from "classnames";
import { forwardRef, type JSX, type ReactNode } from "react";
import "./styles.scss";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className = "" }, ref): JSX.Element => {
    const containerClass = classnames("container", {
      [`${className}`]: className,
    });

    return (
      <div className={containerClass} data-testid="container" ref={ref}>
        {children}
      </div>
    );
  },
);

Container.displayName = "Container";

export default Container;
