import type { JSX } from "react";
import { Container, Content, ResponsiveImage } from "layout";
import { useIsMobile } from "hooks/useIsMobile";
import separatorImage1x from "./images/separator@1x.webp";
import separatorImage2x from "./images/separator@2x.webp";
import "./styles.scss";

export default function Separator(): JSX.Element {
  const isMobile = useIsMobile();

  return (
    <div className="separator" data-testid="separator-container">
      <Container className="separator__container">
        <Content className="separator__content">
          <ResponsiveImage
            alt="Separator"
            className="separator__image"
            fallbackSrc={separatorImage1x}
            height={18}
            lazy={false}
            sizes="(max-width: 768px) 100vw, (min-width: 769px) 1440px"
            srcSet={
              isMobile
                ? `${separatorImage1x} 1x`
                : `${separatorImage1x} 1x, ${separatorImage2x} 2x`
            }
            width={1440}
          />
        </Content>
      </Container>
    </div>
  );
}
