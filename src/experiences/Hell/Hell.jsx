import Heat from "./components/Heat";

export default function Hell({ parentRef }) {
  return (
    <pixiContainer resizeTo={parentRef}>
      <Heat />
    </pixiContainer>
  );
}
