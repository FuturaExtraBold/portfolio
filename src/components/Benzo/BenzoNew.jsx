import React, { useEffect, useState } from "react";
import { Stage } from "@pixi/react";

export default function BenzoNew({ parentRef }) {
  const [parent, setParent] = useState(null);

  useEffect(() => {
    if (parentRef.current) {
      console.log("parentRef", parentRef);
      setParent(parentRef.current);
    }
  }, []);

  if (!parent) return;

  return (
    <>
      <Stage width={parent.offsetWidth} height={parent.offsetHeight}></Stage>
    </>
  );
}
