declare module "ui/ClientModal/components/Gallery/Gallery" {
  import { FC } from "react";

  interface GalleryProps {
    gallery: string[];
    title: string;
  }

  const Gallery: FC<GalleryProps>;
  export default Gallery;
}
