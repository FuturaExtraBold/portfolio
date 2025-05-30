import { createElement, ComponentType, Suspense, type JSX } from "react";

interface LazyProps {
  component: ComponentType;
  lazy?: boolean;
}

export default function Lazy({
  component,
  lazy = true,
}: LazyProps): JSX.Element {
  const element = createElement(component);
  return lazy ? <Suspense fallback={null}>{element}</Suspense> : element;
}
