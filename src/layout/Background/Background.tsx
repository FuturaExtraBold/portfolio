import classnames from "classnames";
import { forwardRef, type JSX, type ReactNode } from "react";
import "./styles.scss";

interface BackgroundProps {
  children: ReactNode;
  className?: string;
}

const Background = forwardRef<HTMLDivElement, BackgroundProps>(
  ({ children, className = "" }, ref): JSX.Element => {
    const backgroundClass = classnames("background", {
      [`${className}`]: className,
    });

    return (
      <div className={backgroundClass} data-testid="background" ref={ref}>
        {children}
      </div>
    );
  },
);

Background.displayName = "Background";

export default Background;
