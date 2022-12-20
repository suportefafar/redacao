import { Box, Typography } from "@mui/material";
import classNames from "classnames";
import { useState } from "react";

export default function EssayPiece({
  piece,
  color,
  firstOfParagraph,
  lastOfParagraph,
  index,
}) {
  const [isOnHover, setOnHover] = useState(false);
  const notHoverColor = "#FFFFFF";
  const isConnective = piece.length <= 40 ? true : false;

  const wrapperClassesBox = classNames(
    "inline mr-4 py-1 rounded-sm ease-out duration-200 hover:cursor-pointer hover:font-medium hover:text-white",
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
      <Typography variant="subtitle1" className={wrapperClassesText}>
        {index && (
          <Typography
            variant="caption"
            className="pr-1"
            style={{ color: isOnHover ? notHoverColor : color }}
          >
            {`1.${index}`}
          </Typography>
        )}

        {piece}
      </Typography>
    </Box>
  );
}
