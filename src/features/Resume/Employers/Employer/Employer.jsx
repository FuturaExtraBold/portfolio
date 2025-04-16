import PropTypes from "prop-types";
import "./styles.scss";

export default function Employer({ description, logo, name, tenure }) {
  return (
    <div className={`employer employer--${name.toLowerCase()}`}>
      <div className="employer__logo">{logo}</div>
      <div className="employer__text">
        <span className="body text-grey employer__tenure">{`${tenure} years`}</span>
        <span className="body text-accent employer__description">
          {description}
        </span>
      </div>
    </div>
  );
}

Employer.propTypes = {
  description: PropTypes.string,
  logo: PropTypes.node,
  name: PropTypes.string,
  tenure: PropTypes.string,
};

Employer.defaultProps = {
  description: "Description",
  logo: null,
  name: "Employer",
  tenure: "Two",
};
