const connective = [];
const problems = { problem_a: "", problem_b: "" };
const intro = [
  [
    "Promulgado pela ONU em 1948, a Declaração Universal dos Direitos " +
      "Humanos garante a todos os indivíduos o direto à segurança e ao bem-estar social.",
    "Segundo o filósofo grego Aristóteles, a política deve ser articulada " +
      "pelos homens a fim de alcançar o equilíbrio social.",
    "Segundo o filósofo grego Aristóteles, a política deve ser articulada " +
      "pelos homens a fim de alcançar o equilíbrio social.",
    "Agostinho de Hipona em certa homilia cunhou um aforismo simples mas " +
      "significativo:'Ama e faz o que quiseres'.",
  ],
  [
    "No entanto,",
    "Toda via,",
    "Porém,",
    "Conquanto,",
    "Contanto,",
    "Diante disso,",
  ],
  [
    "a 'PROBLEMA' impossibilita que essa parcela da população desfrute desse direito " +
      "universal na prática.",
    "a conjuntura dessa análise configura-se no Brasil atual, haja vista que, apesar " +
      "de ser um direito constitucionalmente garantido, o 'PROBLEMA' não se encontra efetivado.",
  ],
  ["Desse modo,", "Dessa forma,", "Nesse contexto,", "Sendo assim,"],
  [
    "é essencial analisar os principais propulsores desse contexto hostil: 'MOTIVO_1' e 'MOTIVO_2'.",
    "não há dúvida de que o/a 'PROBLEMA' é um desafio no Brasil; o qual ocorre, infelizmente, " +
      "devido não só ao 'MOTIVO_1', mas também 'ao/por' 'MOTIVO_2'.",
    "esse cenário nefasto ocorre não só em razão do 'MOTIVO_1', mas também devido à/ao 'MOTIVO_2'.",
    "cabe a observação acerca dos fatores que favorecem a questão, com ênfase na/o 'MOTIVO_1' e no/a 'MOTIVO_2'",
  ],
];

const development_a = [
  [
    "Promulgado pela ONU em 1948, a Declaração Universal dos Direitos " +
      "Humanos garante a todos os indivíduos o direto à segurança e ao bem-estar social.",
    "Em sua obra 'O Cidadão de Papel', o escritor brasileiro Gilberto " +
      "Dimenstein disserta que, embora o país apresente um conjunto de leis bastante " +
      "consistente, elas se atêm, de forma geral, ao plano teórico.",
    "Segundo o filósofo grego Aristóteles, a política deve ser articulada " +
      "pelos homens a fim de alcançar o equilíbrio social.",
    "Agostinho de Hipona em certa homilia cunhou um aforismo simples mas " +
      "significativo:'Ama e faz o que quiseres'.",
  ],
  [
    "No entanto,",
    "Toda via,",
    "Porém,",
    "Conquanto,",
    "Contanto,",
    "Diante disso,",
  ],
  [
    "a 'PROBLEMA' impossibilita que essa parcela da população desfrute desse direito " +
      "universal na prática.",
    "a conjuntura dessa análise configura-se no Brasil atual, haja vista que, apesar " +
      "de ser um direito constitucionalmente garantido, o 'PROBLEMA' não se encontra efetivado.",
  ],
  ["Desse modo,", "Dessa forma,", "Nesse contexto,", "Sendo assim,"],
  [
    "é essencial analisar os principais propulsores desse contexto hostil: 'MOTIVO_1' e 'MOTIVO_2'.",
    "não há dúvida de que o/a 'PROBLEMA' é um desafio no Brasil; o qual ocorre, infelizmente, " +
      "devido não só ao 'MOTIVO_1', mas também 'ao/por' 'MOTIVO_2'.",
    "esse cenário nefasto ocorre não só em razão do 'MOTIVO_1', mas também devido à/ao 'MOTIVO_2'.",
    "cabe a observação acerca dos fatores que favorecem a questão, com ênfase na/o 'MOTIVO_1' e no/a 'MOTIVO_2'",
  ],
];

const development_b = [
  [
    "Promulgado pela ONU em 1948, a Declaração Universal dos Direitos " +
      "Humanos garante a todos os indivíduos o direto à segurança e ao bem-estar social.",
    "Em sua obra 'O Cidadão de Papel', o escritor brasileiro Gilberto " +
      "Dimenstein disserta que, embora o país apresente um conjunto de leis bastante " +
      "consistente, elas se atêm, de forma geral, ao plano teórico.",
    "Segundo o filósofo grego Aristóteles, a política deve ser articulada " +
      "pelos homens a fim de alcançar o equilíbrio social.",
    "Agostinho de Hipona em certa homilia cunhou um aforismo simples mas " +
      "significativo:'Ama e faz o que quiseres'.",
  ],
  [
    "No entanto,",
    "Toda via,",
    "Porém,",
    "Conquanto,",
    "Contanto,",
    "Diante disso,",
  ],
  [
    "a 'PROBLEMA' impossibilita que essa parcela da população desfrute desse direito " +
      "universal na prática.",
    "a conjuntura dessa análise configura-se no Brasil atual, haja vista que, apesar " +
      "de ser um direito constitucionalmente garantido, o 'PROBLEMA' não se encontra efetivado.",
  ],
  ["Desse modo,", "Dessa forma,", "Nesse contexto,", "Sendo assim,"],
  [
    "é essencial analisar os principais propulsores desse contexto hostil: 'MOTIVO_1' e 'MOTIVO_2'.",
    "não há dúvida de que o/a 'PROBLEMA' é um desafio no Brasil; o qual ocorre, infelizmente, " +
      "devido não só ao 'MOTIVO_1', mas também 'ao/por' 'MOTIVO_2'.",
    "esse cenário nefasto ocorre não só em razão do 'MOTIVO_1', mas também devido à/ao 'MOTIVO_2'.",
    "cabe a observação acerca dos fatores que favorecem a questão, com ênfase na/o 'MOTIVO_1' e no/a 'MOTIVO_2'",
  ],
];

const conclusion = [
  [
    "Promulgado pela ONU em 1948, a Declaração Universal dos Direitos " +
      "Humanos garante a todos os indivíduos o direto à segurança e ao bem-estar social.",
    "Em sua obra 'O Cidadão de Papel', o escritor brasileiro Gilberto " +
      "Dimenstein disserta que, embora o país apresente um conjunto de leis bastante " +
      "consistente, elas se atêm, de forma geral, ao plano teórico.",
    "Segundo o filósofo grego Aristóteles, a política deve ser articulada " +
      "pelos homens a fim de alcançar o equilíbrio social.",
    "Agostinho de Hipona em certa homilia cunhou um aforismo simples mas " +
      "significativo:'Ama e faz o que quiseres'.",
  ],
  [
    "No entanto,",
    "Toda via,",
    "Porém,",
    "Conquanto,",
    "Contanto,",
    "Diante disso,",
  ],
  [
    "a 'PROBLEMA' impossibilita que essa parcela da população desfrute desse direito " +
      "universal na prática.",
    "a conjuntura dessa análise configura-se no Brasil atual, haja vista que, apesar " +
      "de ser um direito constitucionalmente garantido, o 'PROBLEMA' não se encontra efetivado.",
  ],
  ["Desse modo,", "Dessa forma,", "Nesse contexto,", "Sendo assim,"],
  [
    "é essencial analisar os principais propulsores desse contexto hostil: 'MOTIVO_1' e 'MOTIVO_2'.",
    "não há dúvida de que o/a 'PROBLEMA' é um desafio no Brasil; o qual ocorre, infelizmente, " +
      "devido não só ao 'MOTIVO_1', mas também 'ao/por' 'MOTIVO_2'.",
    "esse cenário nefasto ocorre não só em razão do 'MOTIVO_1', mas também devido à/ao 'MOTIVO_2'.",
    "cabe a observação acerca dos fatores que favorecem a questão, com ênfase na/o 'MOTIVO_1' e no/a 'MOTIVO_2'",
  ],
];

export const STANDARD_ESSAY = {
  intro,
  development_a,
  development_b,
  conclusion,
};
