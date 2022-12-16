import EssayParagraph from "./EssayParagraph";
import { STANDARD_ESSAY } from "../../data/dummy";
export default function IntroParagraph() {
  const pieces = Object.keys(STANDARD_ESSAY.intro); //['allusion', 'connective_a', ...]
  return <EssayParagraph title="Introdução" color="#4D8EF5" piece={piece} />;
}
