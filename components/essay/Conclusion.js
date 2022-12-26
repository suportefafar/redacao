import EssayParagraph from "./EssayParagraph";
import { STANDARD_ESSAY } from "../../data/dummy_database";
import { useEffect, useState } from "react";

export default function Conclusion() {
  return (
    <EssayParagraph
      title="Conclusão"
      color="#E15F53"
      pieces_paragraph={STANDARD_ESSAY.conclusion}
      paragraphIndex={4}
      onPieceClick={() => {}}
    />
  );
}
