import { Box, Typography } from "@mui/material";
import classNames from "classnames";
import { useState } from "react";

export default function EssayPiece({
  pieceText,
  color,
  firstOfParagraph,
  lastOfParagraph,
  paragraphIndex,
  locationIndex,
  isConnective,
  onClick,
}) {
  return (
    <Box
      className={`inline group leading-4 p-1 hover:text-white rounded-sm ease-in-out duration-200 hover:cursor-pointer ${
        isConnective ? "bg-yellow-100" : ""
      } ${firstOfParagraph ? "ml-6 mr-2 md:mr-1" : "mx-2 md:mx-1"}`}
      sx={{
        "&:hover": {
          backgroundColor: color,
        },
      }}
      onClick={(event) => {
        onClick(
          event,
          event.currentTarget.children[1],
          paragraphIndex,
          locationIndex
        );
      }}
    >
      <Typography
        variant="caption"
        className="pr-1 group-hover:text-white"
        sx={{
          color,
        }}
      >
        {`${paragraphIndex}.${locationIndex}`}
      </Typography>
      <Typography variant="subtitle1" className="inline group-hover:text-white">
        {pieceText}
      </Typography>
    </Box>
  );
}
