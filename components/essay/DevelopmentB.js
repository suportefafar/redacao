import EssayParagraph from "./EssayParagraph";
import { STANDARD_ESSAY } from "../../data/dummy_database";
import { useEffect, useState } from "react";

export default function DevelopmentB() {
  return (
    <EssayParagraph
      title="Desenvolvimento B"
      color="#5C5C5C"
      pieces_paragraph={STANDARD_ESSAY.development_b}
      paragraphIndex={3}
      onPieceClick={() => {}}
    />
  );
}
