import { Box, Button, Card, Divider, Typography } from "@mui/material";

export default function OfficialManual() {
  return (
    <Card variant="outlined" className="p-4 bg-gray-50">
      <Box className="flex flex-col gap-2">
        <Typography variant="h4">Manual Oficial</Typography>
        <Typography variant="subtitle1" className="text-justify">
          Confira os dois documentos mais importantes do INEP: Cartilha do
          Participante e Guia do estudante.
        </Typography>
      </Box>
      <Divider className="my-4" />

      <Box className="flex flex-col gap-2">
        <Typography variant="subtitle2">
          A{" "}
          <i>
            <u>Cartilha</u> do Participante
          </i>{" "}
          é um manual completo e detalhado sobre a redação do ENEM. Já o{" "}
          <i>
            <u>Guia</u> do estudante
          </i>{" "}
          traz exemplos de redação nota 1000 da última edição do ENEM,
          escolhidos pelo INEP.
        </Typography>

        <Typography variant="body1">
          Acesse os documentos pelos links:
        </Typography>
      </Box>

      <Box className="flex justify-center gap-2 pt-4 ">
        <Button href="https://download.inep.gov.br/download/enem/cartilha_do_participante_enem_2022.pdf">
          Cartilha do participante
        </Button>
        <Button href="https://download.inep.gov.br/publicacoes/institucionais/avaliacoes_e_exames_da_educacao_basica/entenda_a_sua_nota_no_enem_guia_do_participante.pdf">
          Guia do Participante
        </Button>
      </Box>
    </Card>
  );
}
