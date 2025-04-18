declare module "utils/animation" {
  import type { DisplayObject } from "pixi.js";
  import type { RefObject } from "react";

  export interface AnimateFloatOptions {
    amplitudeX?: number;
    amplitudeY?: number;
    ref: RefObject<DisplayObject>;
    rotationRange?: number;
    tickTime?: number;
  }
  export function animateFloat(options: AnimateFloatOptions): () => void;

  export interface AnimateRotationOptions {
    duration: number;
    ease?: string;
    origin?: number;
    ref: RefObject<DisplayObject>;
    repeat?: boolean;
    rotationAmount?: number;
  }
  export function animateRotation(options: AnimateRotationOptions): void;

  export interface AnimateScaleOptions {
    duration: number;
    ease?: string;
    ref: RefObject<DisplayObject>;
    repeat?: boolean;
    yoyo?: boolean;
    scaleAmount?: number;
  }
  export function animateScale(options: AnimateScaleOptions): void;

  export interface AnimateTickOptions {
    ref: RefObject<DisplayObject>;
    tickTime?: number;
  }
  export function animateTick(options: AnimateTickOptions): () => void;

  export interface AnimateTintOptions {
    color: number;
    duration: number;
    ease?: string;
    ref: RefObject<DisplayObject>;
    repeat?: boolean;
    yoyo?: boolean;
  }
  export function animateTint(options: AnimateTintOptions): void;

  export interface SetPositionOptions {
    ref: RefObject<DisplayObject>;
    x: number;
    y: number;
    duration?: number;
    ease?: string;
    repeat?: boolean;
    yoyo?: boolean;
  }
  export function setPosition(options: SetPositionOptions): void;

  export interface SetScaleOptions {
    ref: RefObject<DisplayObject>;
    scale: number;
    duration?: number;
    ease?: string;
    repeat?: boolean;
    yoyo?: boolean;
  }
  export function setScale(options: SetScaleOptions): void;

  export function gsapSetup(): void;
}
