import { Box, Card, Typography } from "@mui/material";
import EssayPiece from "./EssayPiece";

export default function EssayParagraph({ title, color, pieces }) {
  const classlistCard = `p-2 text-justify border-[1px] border-[${color}]`;
  const classlistTitle = `text-[${color}]`;
  return (
    <Box>
      <Typography variant="h6" className={classlistTitle}>
        {title}
      </Typography>
      <Card variant="outlined" className={classlistCard}>
        {pieces.map((piece) => (
          <EssayPiece piece={piece} color={color} />
        ))}
      </Card>
    </Box>
  );
}
