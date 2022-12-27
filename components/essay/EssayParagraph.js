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

import EssayPiece from "./EssayPiece";

function chooseRandomPiece(pieces) {
  const index = Math.floor(Math.random() * pieces.length);

  return pieces[index];
}

function generatePiecesOptions(pieces_text, selected_piece_text) {
  console.log(selected_piece_text);
  const arr = pieces_text.map((item) => ({
    text: item,
    selected: item === selected_piece_text,
  }));

  return arr;
}

export default function EssayParagraph({
  title,
  color,
  paragraphIndex,
  piecesSeparatedByLocation,
}) {
  const [pieces, setPieces] = useState([]);
  const [piecesOptions, setPiecesOptions] = useState([]);
  const [anchorElement, setAnchorElement] = useState(null);
  const [selectedPiece, setSelectedPiece] = useState("");

  const open = Boolean(anchorElement);

  const wrapperClassesPiecesOptions = classNames("", {
    ["hover:bg-blue-100"]: paragraphIndex === 1,
    ["hover:bg-green-100"]: paragraphIndex === 2,
    ["hover:bg-gray-100"]: paragraphIndex === 3,
    ["hover:bg-red-100"]: paragraphIndex === 4,
  });

  function handlePopoverClose() {
    setAnchorElement(null);
  }

  function onPieceClickHandler(
    event,
    paragraphIndex,
    locationIndex,
    pieceText
  ) {
    const location_pieces = piecesSeparatedByLocation.find(
      (item) =>
        item.location_index == locationIndex &&
        item.paragraph_index == paragraphIndex
    );

    if (location_pieces) {
      setPiecesOptions(
        generatePiecesOptions(location_pieces.pieces, pieceText)
      );
      setSelectedPiece(pieceText);
      setAnchorElement(event.currentTarget);
    }
  }

  function onSelectPiece(event, pieceText) {
    anchorElement.innerText = pieceText;
    handlePopoverClose();
  }

  useEffect(() => {
    const array_aux = [];
    piecesSeparatedByLocation.forEach((item) => {
      const piece_text = chooseRandomPiece(item.pieces);

      array_aux.push({
        location_index: item.location_index,
        paragraph_index: item.paragraph_index,
        is_connective: item.are_connetives,
        piece_text,
      });
    });
    setPieces(array_aux);
  }, []);

  //console.log(piecesOptions);

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
        {pieces.map((item, index, arr) => (
          <EssayPiece
            key={index}
            pieceText={item.piece_text}
            color={color}
            firstOfParagraph={index === 0}
            lastOfParagraph={index === arr.length - 1}
            paragraphIndex={item.paragraph_index}
            locationIndex={item.location_index}
            isConnective={item.is_connective}
            onClick={onPieceClickHandler}
          />
        ))}
      </Card>
      {/**
       *
       *
       *
       **/}
      <Popover
        open={open}
        anchorEl={anchorElement}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        className="w-full h-full sm:w-8/12 sm:h-3/6 md:h-3/6"
      >
        <List>
          {piecesOptions.map((item, index) => (
            <ListItemButton key={index}>
              <ListItemText
                style={{ color: item.selected ? "blue" : "black" }}
                onClick={(event) => onSelectPiece(event, item.text)}
              >
                {item.text}
              </ListItemText>
            </ListItemButton>
          ))}
        </List>
      </Popover>
    </Box>
  );
}
