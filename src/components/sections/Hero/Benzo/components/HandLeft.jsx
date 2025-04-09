import { useCallback, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useBenzo } from "../BenzoProvider";

export default function HandLeft() {
  const {
    allTexturesLoaded,
    colorCrystalBall,
    durationCrystalBall,
    parentSize,
    textures,
  } = useBenzo();

  const handRef = useRef(null);
  const parentSizeRef = useRef(parentSize);
  const scaleRef = useRef(0.5);

  // Function to position the hand
  const positionHand = useCallback(() => {
    if (handRef.current) {
      gsap.set(handRef.current, {
        pixi: {
          x: parentSize.width / 2 - parentSize.width / 6.75,
          y: parentSize.height - handRef.current.height / 2,
        },
      });
    }
  }, [parentSize]);

  // Function to move the hand left with oscillation effect
  const moveHand = useCallback(() => {
    const rhc = handRef.current;
    if (!rhc) return;

    let time = 0;

    // Apply the scale factor to the amplitudes
    const rotationRange = 360;

    // Set the initial position
    const baseX = () =>
      parentSizeRef.current.width / 2 - parentSizeRef.current.width / 6.75;
    const baseY = () => parentSizeRef.current.height - rhc.height / 2;

    const offScreenBottomOffset = rhc.height / 2 - 120; // Adjust the offset as needed

    // Function to calculate the new position and rotation
    const tick = () => {
      time += 0.01;

      const amplitudeX = 10 * scaleRef.current * 2; // Scaled amplitude
      const amplitudeY = 5 * scaleRef.current * 2; // Scaled amplitude

      // Oscillation effect
      const offsetX = Math.sin(time * 0.8) * amplitudeX;
      const offsetY = Math.cos(time * 0.6) * amplitudeY;
      const yPosition = baseY() + offsetY - offScreenBottomOffset;
      const rotation = Math.sin(time * 0.3) * ((rotationRange * Math.PI) / 180); // convert degrees to radians

      gsap.set(rhc, {
        pixi: {
          x: baseX() + offsetX,
          y: yPosition,
          rotation,
        },
      });
    };

    // Use GSAP ticker for smooth animation
    gsap.ticker.add(tick);

    return () => {
      gsap.ticker.remove(tick);
    };
  }, []);

  const scaleHand = useCallback(() => {
    const calculateScale = () => {
      const maxWidth = 1440; // Maximum width where scale is 1
      const minWidth = 768; // Minimum width where scale decreases
      const width = Math.max(minWidth, Math.min(parentSize.width, maxWidth)); // Clamp width between min and max
      return width / maxWidth / 2; // Scale is proportional to the width
    };

    const scale = calculateScale();

    if (handRef.current) {
      gsap.set(handRef.current, {
        pixi: { scale: scale },
      });
    }
    scaleRef.current = scale; // Store the current scale
  }, [parentSize]);

  const tintHand = useCallback(() => {
    if (handRef.current) {
      gsap.to(handRef.current, {
        pixi: {
          tint: colorCrystalBall,
          duration: durationCrystalBall,
        },
      });
    }
  }, [colorCrystalBall, durationCrystalBall]);

  useEffect(() => {
    if (handRef.current) {
      positionHand();
    }
  }, [parentSize, positionHand]);

  const hasAnimated = useRef(false);
  useEffect(() => {
    if (handRef.current && !hasAnimated.current) {
      hasAnimated.current = true;
      moveHand();
    }
  }, [moveHand]);

  useEffect(() => {
    if (handRef.current) {
      tintHand();
    }
  }, [tintHand]);

  useEffect(() => {
    if (handRef.current) {
      scaleHand();
    }
  }, [parentSize, scaleHand]);

  useEffect(() => {
    parentSizeRef.current = parentSize;
  }, [parentSize]);

  if (!allTexturesLoaded || !textures.handLeft) return null;

  return (
    <pixiSprite
      alpha={1}
      anchor={0.5}
      scale={0.5}
      ref={handRef}
      texture={textures.handLeft}
      tint="#ffffff"
    />
  );
}
