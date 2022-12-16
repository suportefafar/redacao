import EssayParagraph from "./EssayParagraph";
import { STANDARD_ESSAY } from "../../data/dummy";
import { useEffect, useState } from "react";

function chooseRandomPiece(pieces) {
  const index = Math.floor(Math.random() * pieces.length);

  return pieces[index];
}

export default function IntroParagraph() {
  const pieces_categories = Object.keys(STANDARD_ESSAY.intro); //['allusion', 'connective_a', ...]
  const [pieces, setPieces] = useState([]);

  useEffect(() => {
    const array_aux = [];
    pieces_categories.forEach((pieces_category) => {
      const pieces_array = STANDARD_ESSAY.intro[pieces_category];
      const piece_item = chooseRandomPiece(pieces_array);

      array_aux.push(piece_item);
    });
    setPieces(array_aux);
  }, []);

  return <EssayParagraph title="Introdução" color="#4D8EF5" pieces={pieces} />;
}
