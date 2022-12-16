import { Box, Typography } from "@mui/material";

export default function EssayPiece({ piece, color }) {
  const classListText = `inline py-1 px-[0.15rem] hover:cursor-pointer hover:bg-[${color}] hover:text-white hover:border-[1px] border-dashed`;
  return (
    <Box className="inline">
      <Typography variant="subtitle1" className={classListText} style={{}}>
        {piece}
      </Typography>
    </Box>
  );
}
