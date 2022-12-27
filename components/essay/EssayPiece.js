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
  const [isOnHover, setOnHover] = useState(false);
  const notHoverColor = "#FFFFFF";

  const wrapperClassesBox = classNames(
    "inline mr-4 p-1 rounded-sm ease-out duration-200 hover:cursor-pointer hover:font-medium hover:text-white",
    {
      ["ml-6"]: firstOfParagraph,
      [""]: !firstOfParagraph,
    }
  );

  const wrapperClassesText = classNames("inline p-1", {
    ["rounded-sm bg-yellow-100 ease-out duration-200 hover:bg-transparent"]:
      isConnective,
    [""]: !isConnective,
  });

  function onMouseHoverHandler() {
    setOnHover(!isOnHover);
  }

  return (
    <Box
      className={wrapperClassesBox}
      style={{ backgroundColor: isOnHover ? color : notHoverColor }}
      onMouseEnter={onMouseHoverHandler}
      onMouseLeave={onMouseHoverHandler}
    >
      <Typography
        variant="caption"
        className="pr-1"
        style={{ color: isOnHover ? notHoverColor : color }}
      >
        {`${paragraphIndex}.${locationIndex}`}
      </Typography>
      <Typography
        variant="subtitle1"
        className={wrapperClassesText}
        onClick={(event) => {
          onClick(
            event,
            paragraphIndex,
            locationIndex,
            event.currentTarget.innerText
          );
        }}
      >
        {pieceText}
      </Typography>
    </Box>
  );
}
