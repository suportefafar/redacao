import { useEffect, useState } from "react";
import Head from "next/head";

import { Card, Typography } from "@mui/material";
import { BsMouse } from "react-icons/bs";

import IntroParagraph from "../components/essay/IntroParagraph";
import { STANDARD_ESSAY } from "../data/dummy";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Redação ENEM · Início</title>
      </Head>

      <main>
        <Typography
          variant="caption"
          className="hidden md:flex justify-center items-center py-4 text-gray-400"
        >
          <BsMouse /> Passe o mouse para destacar o elemento e clique para
          alterá-lo
        </Typography>
        <IntroParagraph />
      </main>
    </div>
  );
}
