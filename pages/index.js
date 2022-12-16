import { useEffect, useState } from "react";
import Head from "next/head";

import { Card, Typography } from "@mui/material";
import { BsMouse } from "react-icons/bs";

import IntroParagraph from "../components/essay/IntroParagraph";
import { STANDARD_ESSAY } from "../data/dummy";

export default function Home() {
  const [introPiecesIndex, setIntroPiecesIndex] = useState({
    allusion: 0,
    connective_intro_a: 0,
    contextualization: 0,
    connective_intro_b: 0,
    intro_to_problems: 0,
  });

  useEffect(() => {
    const allusion_size = STANDARD_ESSAY.intro.allusion.length;
    const connective_intro_a_size =
      STANDARD_ESSAY.intro.connective_intro_a.length;
    const contextualization_size =
      STANDARD_ESSAY.intro.contextualization.length;
    const connective_intro_b_size =
      STANDARD_ESSAY.intro.connective_intro_b.length;
    const intro_to_problems_size =
      STANDARD_ESSAY.intro.intro_to_problems.length;

    const allusion = Math.floor(Math.random() * allusion_size);
    const connective_intro_a = Math.floor(
      Math.random() * connective_intro_a_size
    );
    const contextualization = Math.floor(
      Math.random() * contextualization_size
    );
    const connective_intro_b = Math.floor(
      Math.random() * connective_intro_b_size
    );
    const intro_to_problems = Math.floor(
      Math.random() * intro_to_problems_size
    );

    setIntroPiecesIndex({
      allusion,
      connective_intro_a,
      contextualization,
      connective_intro_b,
      intro_to_problems,
    });
  }, []);

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
