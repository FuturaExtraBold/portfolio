import { RefObject, type JSX, useMemo, useRef } from "react";
// import { Point, Sprite, Texture } from "pixi.js";
import { Sprite, Texture } from "pixi.js";
import { useBenzo } from "../BenzoProvider";
// import { DropShadowFilter } from "pixi-filters";
import { useTitleAnimations } from "../hooks/animations";

export default function BenzoTitle(): JSX.Element | null {
  const { allTexturesLoaded, parentSizeRef, textures } = useBenzo();
  const titleRef1 = useRef<Sprite | null>(null);
  const titleRef2 = useRef<Sprite | null>(null);
  const titleRef3 = useRef<Sprite | null>(null);
  const titleRef4 = useRef<Sprite | null>(null);
  const titleRef5 = useRef<Sprite | null>(null);
  const titleRef6 = useRef<Sprite | null>(null);
  const titleRef7 = useRef<Sprite | null>(null);
  const refs = useMemo(
    () => [
      titleRef1,
      titleRef2,
      titleRef3,
      titleRef4,
      titleRef5,
      titleRef6,
      titleRef7,
    ],
    []
  );

  // const shadowOffset = useMemo<Point>(() => {
  //   return new Point(0, 4);
  // }, []);

  // const dsf = useMemo(
  //   () =>
  //     new DropShadowFilter({
  //       alpha: 1,
  //       color: 0x0b3518,
  //       blur: 0,
  //       offset: shadowOffset,
  //     }),
  //   [shadowOffset]
  // );

  useTitleAnimations({ refs });

  const getSprite = (
    key: string,
    ref: RefObject<Sprite | null>,
    texture: Texture
  ) => {
    return (
      <pixiSprite
        alpha={1}
        key={key}
        ref={ref}
        texture={texture}
        height={parentSizeRef.current.height}
        width={parentSizeRef.current.width}
      />
    );
  };

  if (!allTexturesLoaded) return null;

  const content = [
    getSprite("letter-b", titleRef1, textures.title1),
    getSprite("letter-e", titleRef2, textures.title2),
    getSprite("letter-n", titleRef3, textures.title3),
    getSprite("letter-z", titleRef4, textures.title4),
    getSprite("letter-o", titleRef5, textures.title5),
    getSprite("texture", titleRef6, textures.title6),
    getSprite("developer", titleRef7, textures.title7),
  ];

  return (
    // <pixiContainer filters={[dsf, dsf, dsf] as any}>{content}</pixiContainer>
    <pixiContainer>{content}</pixiContainer>
  );
}
