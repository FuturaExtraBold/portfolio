import PropTypes from "prop-types";
import classnames from "classnames";
import "./styles.scss";

export default function Content({ children, className, ref }) {
  const contentClass = classnames("content", {
    [`${className}`]: className,
  });

  return (
    <div className={contentClass} ref={ref}>
      {children}
    </div>
  );
}

Content.defaultProps = {
  children: null,
  className: "",
  ref: null,
};

Content.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  ref: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};
