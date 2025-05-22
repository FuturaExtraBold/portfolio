import type { JSX } from "react";
import { Container, Content } from "layout";
import "./styles.scss";

export default function Separator(): JSX.Element {
  return (
    <div className="separator" data-testid="separator-container">
      <Container className="separator__container">
        <Content className="separator__content">
          <img
            alt="Separator"
            className="separator__image"
            src="/assets/images/ui/separator@1x.webp"
            srcSet="/assets/images/ui/separator@1x.webp 1440w, /assets/images/ui/separator@2x.webp 2880w"
            sizes="(min-width: 1440px) 1440px, 100vw"
            width={1440}
            height={18}
          />
        </Content>
      </Container>
    </div>
  );
}
