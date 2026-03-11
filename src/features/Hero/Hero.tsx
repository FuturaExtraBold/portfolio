import "./styles.scss";

import { PixiErrorBoundary } from "experiences/PixiErrorBoundary";
import gsap from "gsap";
import { useContainerRef } from "hooks/useContainerRef";
import { Background, Container, Section } from "layout";
import { useBenzoLoad } from "providers/AppProvider";
import {
  type JSX,
  lazy,
  memo,
  RefObject,
  Suspense,
  useEffect,
  useRef,
} from "react";
import { Separator } from "ui";

const PixiApp = lazy(() => import("experiences/Benzo/PixiApp"));

function Hero(): JSX.Element {
  const [parentRef, setParentRef, hasParent] = useContainerRef();
  const { benzoLoadProgress } = useBenzoLoad();
  const scrimRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (benzoLoadProgress !== 1 || !scrimRef.current) return;
    gsap.to(scrimRef.current, {
      opacity: 0,
      duration: 1.5,
      ease: "power2.inOut",
      onComplete: () => {
        if (scrimRef.current) scrimRef.current.style.display = "none";
      },
    });
  }, [benzoLoadProgress]);

  return (
    <Section className="hero">
      <Container className="hero__container" ref={setParentRef}>
        <Background className="hero__background">
          {hasParent && (
            <PixiErrorBoundary>
              <Suspense fallback={null}>
                <PixiApp parentRef={parentRef as RefObject<HTMLDivElement>} />
              </Suspense>
            </PixiErrorBoundary>
          )}
        </Background>
        <div className="overlay hero__overlay"></div>
        <div className="hero__scrim" ref={scrimRef} />
      </Container>
      <Separator />
    </Section>
  );
}

export default memo(Hero);
