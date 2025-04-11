import PropTypes from "prop-types";
import classnames from "classnames";
import "./styles.scss";

export default function SectionHeader({
  subtitle,
  title,
  useHairline = true,
  useShadow = false,
  variant,
}) {
  const headerClass = classnames("section-header", {
    [`section-header--${variant}`]: variant,
    [`section-header--text-shadow`]: useShadow,
  });

  return (
    <header className={headerClass}>
      <span className="heading--1">{title}</span>
      <span className="body body--large">{subtitle}</span>
      {useHairline && <div className="section-header__hairline" />}
    </header>
  );
}

SectionHeader.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  useHairline: PropTypes.bool,
  useShadow: PropTypes.bool,
  variant: PropTypes.string,
};
