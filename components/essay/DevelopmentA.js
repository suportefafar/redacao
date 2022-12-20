import EssayParagraph from "./EssayParagraph";
import { STANDARD_ESSAY } from "../../data/dummy";
import { useEffect, useState } from "react";

export default function DevelopmentA() {
  const pieces_categories = Object.keys(STANDARD_ESSAY.development_a); //['allusion', 'connective_a', ...]

  return (
    <EssayParagraph
      title="Desenvolvimento A"
      color="#0BA05B"
      pieces_paragraph={STANDARD_ESSAY.development_a}
    />
  );
}
