import React, { type JSX } from "react";
import "./styles.scss";

interface GalleryProps {
  gallery: string[];
  title: string;
}

export default function Gallery({
  gallery,
  title,
}: GalleryProps): JSX.Element | null {
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
