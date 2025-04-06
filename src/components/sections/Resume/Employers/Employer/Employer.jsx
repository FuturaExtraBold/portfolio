import PropTypes from "prop-types";
import "./styles.scss";

export default function Employer({ description, logo, name, tenure }) {
  return (
    <div className={`employer employer--${name.toLowerCase()}`}>
      <div className="employer__logo">{logo}</div>
      <div className="employer__text">
        <p className="text-light employer__tenure">{`${tenure} years`}</p>
        <p className="employer__description">{description}</p>
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
