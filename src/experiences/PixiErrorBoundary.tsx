import { Component, ErrorInfo, PropsWithChildren, type JSX } from "react";

interface State {
  hasError: boolean;
}

export class PixiErrorBoundary extends Component<PropsWithChildren, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    if (import.meta.env.DEV) {
      console.error("PixiErrorBoundary caught an error:", error, info);
    }
  }

  render(): JSX.Element | null {
    if (this.state.hasError) return null;
    return this.props.children as JSX.Element;
  }
}
