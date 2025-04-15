import Background from "./components/Background";

export default function HellApp({ parentRef }) {
  return (
    <pixiContainer resizeTo={parentRef}>
      <Background />
    </pixiContainer>
  );
}
