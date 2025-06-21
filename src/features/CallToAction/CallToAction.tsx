import { type JSX } from "react";
import { Background, Container, Content, Section } from "layout";
import {
  AnimatedText,
  FadeIn,
  MagicButton,
  OverlayFade,
  Separator,
  Wallpaper,
} from "ui";
import { Tools } from "./components/Tools/Tools";
import "./styles.scss";

export default function CallToAction(): JSX.Element {
  return (
    <Section className="cta">
      <Container>
        <Background>
          <Wallpaper />
          <OverlayFade opacity={0.8} />
        </Background>
        <Content className="cta__content">
          <span className="heading--2 cta__title">
            <AnimatedText text="Beyond Illusion, Lies Innovation" center />
          </span>
          <div className="body text-accent cta__description">
            <FadeIn>
              <span className="cta__description-item">
                <span className="cta__description-intro">
                  Step right up and make contact
                </span>
                &nbsp;— whether you seek a conjurer of code, a weaver of
                wondrous interfaces, or simply a skilled hand to bring visions
                to life. With a résumé of marvels and a flair for the
                extraordinary, your next collaborator awaits.
              </span>
            </FadeIn>
            <FadeIn>
              <span className="cta__description-item">
                <span className="cta__description-intro">
                  Versed in the arcane arts
                </span>
                &nbsp;of React, Typescript, and Javascript. A master of HTML and
                SCSS scrolls, and fluent in the dialects of Photoshop,
                Illustrator, Figma, and Sketch. Tools like VSCode, Github, and
                Netlify? Mere extensions of the artisan’s will.
              </span>
            </FadeIn>
            <FadeIn>
              <span className="cta__description-item">
                <span className="cta__description-intro">
                  With a flick of the wrist,
                </span>
                &nbsp;Liquid flows effortlessly, Lighthouse guides the way, and
                assets are honed through ImageOptim and Clop. Emails are tested
                in Litmus, and Shopify storefronts are conjured with flair.
              </span>
            </FadeIn>
            <FadeIn>
              <span className="cta__description-item">
                <span className="cta__description-intro">
                  From the swirling realms
                </span>
                &nbsp;of GSAP, HTML Canvas, and PixiJS, to the underworlds of
                Node, Express, NPM, and Vite — even long-lost tongues like
                ActionScript and Objective-C — no spell is too obscure, no tool
                too arcane.
              </span>
            </FadeIn>
          </div>
          <Tools />
          <div className="cta__buttons">
            <MagicButton
              eventName="email_click"
              href="mailto:benhays@benhays.dev?subject=Summoning%20the%20Artisan%20of%20Code"
              label="Email the Artisan"
            />
            <MagicButton
              ariaLabel="View the résumé in PDF format. Opens in a new tab."
              eventName="resume_click"
              href="/resume.pdf"
              isExternal
              label="View the Résumé (PDF)"
            />
          </div>
        </Content>
      </Container>
      <Separator />
    </Section>
  );
}
