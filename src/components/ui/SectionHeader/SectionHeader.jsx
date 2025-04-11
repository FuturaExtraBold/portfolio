import PropTypes from "prop-types";
import classnames from "classnames";
import "./styles.scss";

export default function SectionHeader({ subtitle, title, useShadow, variant }) {
  const headerClass = classnames("section-header", {
    [`section-header--${variant}`]: variant,
    [`section-header--text-shadow`]: useShadow,
  });

  return (
    <header className={headerClass}>
      <span className="heading--1">{title}</span>
      <span className="body body--large">{subtitle}</span>
      <div className="section-header__hairline" />
    </header>
  );
}

SectionHeader.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  variant: PropTypes.string,
};

SectionHeader.defaultProps = {
  variant: "",
};
