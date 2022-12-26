import { useEffect, useState } from "react";
import Head from "next/head";

import { Box, ButtonGroup, Button, Card, Typography } from "@mui/material";
import { BsMouse } from "react-icons/bs";

import IntroParagraph from "../components/essay/IntroParagraph";
import DevelopmentA from "../components/essay/DevelopmentA";
import DevelopmentB from "../components/essay/DevelopmentB";
import Conclusion from "../components/essay/Conclusion";

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Redação ENEM · Início</title>
      </Head>
      <Box className="flex flex-col gap-2">
        <Typography
          variant="caption"
          className="hidden md:flex justify-center items-center text-gray-600"
        >
          <BsMouse /> Passe o mouse para destacar o elemento e clique para
          alterá-lo
        </Typography>

        <Box className="flex justify-center mt-4">
          <ButtonGroup
            variant="outlined"
            color="info"
            aria-label="outlined button group"
          >
            <Button color="info" className="w-28">
              Genérica
            </Button>
            <Button color="secondary" className="w-28">
              Real
            </Button>
          </ButtonGroup>
        </Box>

        <Box className="flex flex-col gap-4 ">
          <IntroParagraph />
          <DevelopmentA />
          <DevelopmentB />
          <Conclusion />
        </Box>
      </Box>
    </Box>
  );
}
