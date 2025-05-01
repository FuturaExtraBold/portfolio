declare module "utils/animation" {
  import { Sprite } from "pixi.js";
  import type { RefObject } from "react";

  export interface AnimateFloatOptions {
    amplitudeX?: number;
    amplitudeY?: number;
    ref: RefObject<Sprite | HTMLImageElement | null>;
    rotationRange?: number;
    tickTime?: number;
  }
  export function animateFloat(options: AnimateFloatOptions): () => void;

  export interface AnimateRotationOptions {
    duration: number;
    ease?: string;
    origin?: number;
    ref: RefObject<Sprite | null>;
    repeat?: boolean;
    rotationAmount?: number;
    getNextParams?: () => { duration: number; origin: number };
  }
  export function animateRotation(options: AnimateRotationOptions): void;

  export interface AnimateScaleOptions {
    duration: number;
    ease?: string;
    ref: RefObject<Sprite | null>;
    repeat?: boolean;
    scaleAmount?: number;
    yoyo?: boolean;
  }
  export function animateScale(options: AnimateScaleOptions): void;

  export interface AnimateTickOptions {
    amplitudeX?: number;
    amplitudeY?: number;
    baseXAmount: number;
    baseYAmount: number;
    offsetYAmount: number;
    parentSizeRef: RefObject<{ width: number; height: number }>;
    rotationRange?: number;
    ref: RefObject<Sprite | null>;
    scaleRef: RefObject<number>;
    tickTime?: number;
  }
  export function animateTick(options: AnimateTickOptions): () => void;

  export interface AnimateTintOptions {
    color?: number;
    duration?: number;
    ease?: string;
    parentSizeRef?: RefObject<{ width: number; height: number }>;
    ref: RefObject<Sprite | null>;
    repeat?: boolean;
    yoyo?: boolean;
  }
  export function animateTint(options: AnimateTintOptions): void;

  export interface SetPositionOptions {
    duration?: number;
    ease?: string;
    ref: RefObject<Sprite | null>;
    repeat?: boolean;
    usePixi?: boolean;
    x: number;
    y: number;
    yoyo?: boolean;
  }
  export function setPosition(options: SetPositionOptions): void;

  export interface SetScaleOptions {
    duration?: number;
    ease?: string;
    maxScale: number;
    minScale: number;
    maxWidth?: number;
    minWidth?: number;
    parentSize: { width: number; height: number };
    ref: RefObject<Sprite | null>;
    repeat?: boolean;
    scale?: number;
    scaleRef: RefObject<number>;
    usePixi?: boolean;
    yoyo?: boolean;
  }
  export function setScale(options: SetScaleOptions): void;

  export function gsapSetup(): void;
}
