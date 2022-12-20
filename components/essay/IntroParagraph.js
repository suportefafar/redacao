import EssayParagraph from "./EssayParagraph";
import { STANDARD_ESSAY } from "../../data/dummy";

export default function IntroParagraph() {
  return (
    <EssayParagraph
      title="Introdução"
      color="#4D8EF5"
      pieces_paragraph={STANDARD_ESSAY.intro}
    />
  );
}
