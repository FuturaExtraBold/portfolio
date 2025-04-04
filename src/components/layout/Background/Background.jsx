import PropTypes from "prop-types";
import classnames from "classnames";
import "./styles.scss";

export default function Background({ children, className, ref }) {
  const backgroundClass = classnames("background", {
    [`${className}`]: className,
  });

  return (
    <div className={backgroundClass} ref={ref}>
      {children}
    </div>
  );
}

Background.defaultProps = {
  className: "",
  ref: null,
};

Background.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  ref: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};
