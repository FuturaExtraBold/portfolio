import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

export default function Gallery({ gallery, title }) {
  if (!gallery || gallery.length === 0) {
    return null;
  }

  return (
    <div className="client-modal__gallery">
      {gallery.map((image, index) => (
        <img
          key={index}
          src={`/assets/images/case_studies/${image}`}
          alt={`${title} - ${index + 1}`}
          className="client-modal__gallery-image"
        />
      ))}
    </div>
  );
}

Gallery.propTypes = {
  gallery: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};
