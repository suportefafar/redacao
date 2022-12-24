import { useState, useEffect } from "react";
import classNames from "classnames";
import {
  Box,
  Card,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Modal,
  Popover,
  Typography,
} from "@mui/material";

import { MdOutlineClose } from "react-icons/md";

import EssayPiece from "./EssayPiece";

function chooseRandomPiece(pieces) {
  const index = Math.floor(Math.random() * pieces.length);

  return pieces[index];
}

export default function EssayParagraph({
  title,
  color,
  pieces_paragraph,
  onPieceClick,
  paragraphIndex,
}) {
  const [pieces, setPieces] = useState([]);

  //--- POPOVER CONFIG ---
  const [open, setOpen] = useState(null);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //---------

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
            key={index}
            piece={piece}
            color={color}
            firstOfParagraph={index === 0}
            lastOfParagraph={index === arr.length - 1}
            paragraphIndex={paragraphIndex}
            index={index + 1}
            onClick={handleClick}
          />
        ))}
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Typography sx={{ p: 2 }}>The content of the Popover</Typography>
        </Popover>
      </Card>
    </Box>
  );
}
