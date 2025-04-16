import Heat from "./components/Heat";

export default function HellApp({ parentRef }) {
  return (
    <pixiContainer resizeTo={parentRef}>
      <Heat />
    </pixiContainer>
  );
}
