import { forwardRef, type JSX, type ReactNode } from "react";
import classnames from "classnames";
import "./styles.scss";

interface ContentProps {
  children: ReactNode;
  className?: string;
}

const Content = forwardRef<HTMLDivElement, ContentProps>(
  ({ children, className = "" }, ref): JSX.Element => {
    const contentClass = classnames("content", {
      [`${className}`]: className,
    });

    return (
      <div className={contentClass} data-testid="content" ref={ref}>
        {children}
      </div>
    );
  }
);

Content.displayName = "Content";

export default Content;
