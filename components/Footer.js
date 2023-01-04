import { Box, Divider, Typography } from "@mui/material";
import Image from "next/image";

export default function Footer() {
  const current_year = new Date().getFullYear();
  return (
    <Box className="flex flex-col gap-3 mt-10 py-4 px-2">
      <Divider />
      <Box className="flex gap-2 justify-center items-center">
        <Image
          src="/images/icon.svg"
          width={16}
          height={16}
          className="mb-1"
          alt="Logo Redação ENEM"
        />
        <Typography variant="caption">{`© ${current_year} Redação ENEM`}</Typography>
      </Box>
    </Box>
  );
}
