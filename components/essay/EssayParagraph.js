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
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

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
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          className="w-full h-full sm:w-8/12 sm:h-3/6 md:h-3/6"
        >
          <List>
            {[1, 2, 3, 4, 5, 6, 7].map((item) => (
              <ListItemButton className="hover:bg-blue-100">
                <ListItemText>
                  Segundo o filósofo grego Aristóteles, a política deve ser
                  articulada pelos homens a fim de alcançar o equilíbrio social.
                </ListItemText>
              </ListItemButton>
            ))}
          </List>
        </Popover>
      </Card>
    </Box>
  );
}
