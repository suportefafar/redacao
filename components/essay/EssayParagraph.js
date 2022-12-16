import classNames from "classnames";
import { Box, Card, Typography } from "@mui/material";
import EssayPiece from "./EssayPiece";

export default function EssayParagraph({ title, color, pieces }) {
  const classlistCard = `p-2 text-justify border-[1px]`;

  const wrapperClassesTitle = classNames("", {
    [""]: color,
    [""]: !color,
  });

  return (
    <Box>
      <Typography
        variant="h6"
        className={wrapperClassesTitle}
        style={{ color: color }}
      >
        {title}
      </Typography>
      <Card
        variant="outlined"
        className={classlistCard}
        style={{ borderColor: color }}
      >
        {pieces.map((piece) => (
          <EssayPiece piece={piece} color={color} />
        ))}
      </Card>
    </Box>
  );
}
