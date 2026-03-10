import {
  ComponentType,
  createElement,
  type JSX,
  lazy as reactLazy,
  Suspense,
} from "react";

interface LazyProps {
  component?: ComponentType | React.LazyExoticComponent<ComponentType>;
  loader?: () => Promise<{ default: ComponentType }>;
  lazy?: boolean;
}

export default function Lazy({
  component,
  loader,
  lazy = true,
}: LazyProps): JSX.Element {
  const ResolvedComponent =
    component ?? (loader ? reactLazy(loader) : undefined);
  if (!ResolvedComponent) return <></>;
  const element = createElement(ResolvedComponent);
  return lazy ? <Suspense fallback={null}>{element}</Suspense> : element;
}
