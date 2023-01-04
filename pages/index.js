import { useEffect, useState } from "react";
import Head from "next/head";

import { Box, ButtonGroup, Button, Card, Typography } from "@mui/material";
import { BsMouse, BsHandIndexThumb } from "react-icons/bs";

import {
  getParagraphById,
  getAllIntroPieces,
  getAllDevelopmentAPieces,
  getAllDevelopmentBPieces,
  getAllConclusionPieces,
} from "../data/dummy_controller";

import EssayParagraph from "../components/essay/EssayParagraph";

import PRIMARY_COLORS from "../data/colors.js";

export async function getServerSideProps(context) {
  const intro_paragraph = getParagraphById(1);
  const intro_pieces = getAllIntroPieces();

  const development_a_paragraph = getParagraphById(2);
  const development_a_pieces = getAllDevelopmentAPieces();

  const development_b_paragraph = getParagraphById(3);
  const development_b_pieces = getAllDevelopmentBPieces();

  const conclusion_paragraph = getParagraphById(4);
  const conclusion_pieces = getAllConclusionPieces();

  return {
    props: {
      intro_paragraph,
      intro_pieces,
      development_a_paragraph,
      development_a_pieces,
      development_b_paragraph,
      development_b_pieces,
      conclusion_paragraph,
      conclusion_pieces,
    }, // will be passed to the page component as props
  };
}

export default function Home({
  intro_paragraph,
  intro_pieces,
  development_a_paragraph,
  development_a_pieces,
  development_b_paragraph,
  development_b_pieces,
  conclusion_paragraph,
  conclusion_pieces,
}) {
  const [modelEssay, setModelEssay] = useState([
    { text: "Genérica", selected: true },
    { text: "Real", selected: false },
  ]);

  function changeModelEssayHandler(event, model_essay) {
    const newArray = modelEssay.map((item) => {
      item.selected = item.text === model_essay.text;

      return item;
    });

    setModelEssay(newArray);
  }

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
          <BsMouse className="mb-1 mx-1 text-base animate-pulse" /> Passe o
          mouse para destaque as 'peças' da redação e clique se quiser trocar
        </Typography>

        <Typography
          variant="caption"
          className="flex md:hidden justify-center items-center text-gray-600"
        >
          <BsHandIndexThumb className="mb-1 mx-1 text-base animate-pulse" />{" "}
          Toque para destacar e trocar as 'peças' da redação
        </Typography>

        <Box className="flex justify-center my-6">
          <ButtonGroup variant="outlined">
            {modelEssay.map((item, index) => (
              <Button
                key={index}
                color="inherit"
                className={
                  item.selected
                    ? "w-28 text-blue-600 border-blue-400 hover:border-blue-400 hover:bg-transparent"
                    : "w-28 text-gray-500 border-gray-400"
                }
                onClick={(event) => changeModelEssayHandler(event, item)}
              >
                {item.text}
              </Button>
            ))}
          </ButtonGroup>
        </Box>

        <Box className="flex flex-col gap-4 ">
          <EssayParagraph
            title={intro_paragraph.title}
            color={PRIMARY_COLORS.INTRODUCTION_COLOR}
            paragraphIndex={intro_paragraph.id}
            piecesSeparatedByLocation={intro_pieces}
          />
          <EssayParagraph
            title={development_a_paragraph.title}
            color={PRIMARY_COLORS.DEVELOPMENT_A_COLOR}
            paragraphIndex={development_a_paragraph.id}
            piecesSeparatedByLocation={development_a_pieces}
          />
          <EssayParagraph
            title={development_b_paragraph.title}
            color={PRIMARY_COLORS.DEVELOPMENT_B_COLOR}
            paragraphIndex={development_b_paragraph.id}
            piecesSeparatedByLocation={development_b_pieces}
          />
          <EssayParagraph
            title={conclusion_paragraph.title}
            color={PRIMARY_COLORS.CONCLUSION_COLOR}
            paragraphIndex={conclusion_paragraph.id}
            piecesSeparatedByLocation={conclusion_pieces}
          />
        </Box>
      </Box>
    </Box>
  );
}
