import EssayParagraph from "./EssayParagraph";

export default function IntroParagraph({ pieces, paragraph }) {
  console.log("NA INTRO", pieces, paragraph);
  return (
    <EssayParagraph
      title="Introdução"
      color="#4D8EF5"
      pieces_paragraph={pieces}
      paragraphIndex={1}
    />
  );
}
