import { PARAGRAPHS, PIECES } from "./dummy_database.js";

function sortByLocationInParagraphId(pieces) {
  return pieces.sort((current_item, next_item) => {
    if (
      current_item.location_in_paragraph_index <
      next_item.location_in_paragraph_index
    )
      return -1;
    if (
      current_item.location_in_paragraph_index >
      next_item.location_in_paragraph_index
    )
      return 1;
    return 0;
  });
}

function separateByLocationInParagraph(pieces) {
  const pieces_separated = [];

  pieces.forEach((item) => {
    const location_item = pieces_separated.find(
      (item_separated) =>
        item_separated.location_index === item.location_in_paragraph_index
    );

    if (location_item) {
      const location_index = pieces_separated.indexOf(location_item);
      pieces_separated[location_index].pieces.push(item.text);
    } else {
      pieces_separated.push({
        location_index: item.location_in_paragraph_index,
        paragraph_index: item.paragraph_id,
        are_connetives: item.is_connective,
        pieces: [item.text],
      });
    }
  });

  return pieces_separated;
}

export function getAllParagraphs() {
  return PARAGRAPHS;
}

export function getParagraphById(id) {
  return PARAGRAPHS.find((item) => item.id === id);
}

export function getAllIntroPieces() {
  const pieces = PIECES.filter((item) => item.paragraph_id === 1);
  const pieces_asc_sorted = sortByLocationInParagraphId(pieces);
  const pieces_separated_by_location =
    separateByLocationInParagraph(pieces_asc_sorted);

  return pieces_separated_by_location;
}

export function getAllDevelopmentAPieces() {
  const pieces = PIECES.filter((item) => item.paragraph_id === 2);
  const pieces_asc_sorted = sortByLocationInParagraphId(pieces);
  const pieces_separated_by_location =
    separateByLocationInParagraph(pieces_asc_sorted);

  return pieces_separated_by_location;
}

export function getAllDevelopmentBPieces() {
  const pieces = PIECES.filter((item) => item.paragraph_id === 3);
  const pieces_asc_sorted = sortByLocationInParagraphId(pieces);
  const pieces_separated_by_location =
    separateByLocationInParagraph(pieces_asc_sorted);

  return pieces_separated_by_location;
}

export function getAllConclusionPieces() {
  const pieces = PIECES.filter((item) => item.paragraph_id === 4);
  const pieces_asc_sorted = sortByLocationInParagraphId(pieces);
  const pieces_separated_by_location =
    separateByLocationInParagraph(pieces_asc_sorted);

  return pieces_separated_by_location;
}
