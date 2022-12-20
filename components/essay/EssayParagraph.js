import { useState, useEffect } from "react";
import classNames from "classnames";
import { Box, Card, Typography } from "@mui/material";
import EssayPiece from "./EssayPiece";

function chooseRandomPiece(pieces) {
  const index = Math.floor(Math.random() * pieces.length);

  return pieces[index];
}

export default function EssayParagraph({ title, color, pieces_paragraph }) {
  const [pieces, setPieces] = useState([]);

  useEffect(() => {
    const array_aux = [];
    pieces_paragraph.forEach((category) => {
      const piece_item = chooseRandomPiece(category);

      array_aux.push(piece_item);
    });
    setPieces(array_aux);
  }, []);

  return (
    <Box>
      <Typography variant="h6" style={{ color: color }}>
        {title}
      </Typography>
      <Card
        variant="outlined"
        className="p-2 text-justify border-[1px]"
        style={{ borderColor: color }}
      >
        {pieces.map((piece, index, arr) => (
          <EssayPiece
            piece={piece}
            color={color}
            firstOfParagraph={index === 0}
            lastOfParagraph={index === arr.length - 1}
            index={index + 1}
          />
        ))}
      </Card>
    </Box>
  );
}
