import React from "react";
import Separator from "components/ui/Separator/Separator";
import "./styles.scss";

export default function Resume() {
  return (
    <section className="resume">
      <div className="container resume__container"></div>
      <div className="layout-test-specs">
        Résumé
        <br />
        1440 x 1080 (4:3 or Arbitrary)
        <br />
        Kajabi (~12y), Hooky (~6y), Studio318 (~2y)
        <br />
        Gravestones for the companies?
        <br />
        One at the bottom that says "Childlike Wonder 1981-"?
      </div>
      <Separator />
    </section>
  );
}
