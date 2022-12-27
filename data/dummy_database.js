/* TABLE
    PIECES
      - id
      - text
      - is_connective
      - paragraph_id
    
    PARAGRAPH
      - id
      - name
      - resumed_name
*/

export const PARAGRAPHS = [
  { id: 1, title: "Introdução", resumed_name: "intro" },
  { id: 2, title: "Desenvolvimento A", resumed_name: "dev_a" },
  { id: 3, title: "Desenvolvimento B", resumed_name: "dev_b" },
  { id: 4, title: "Conclusão", resumed_name: "conclusion" },
];

export const PIECES = [
  {
    id: 1,
    text:
      "Promulgado pela ONU em 1948, a Declaração Universal dos Direitos " +
      "Humanos garante a todos os indivíduos o direto à segurança e ao bem-estar social.",
    is_connective: false,
    location_in_paragraph_index: 1,
    paragraph_id: 1,
  },
  {
    id: 2,
    text:
      "Segundo o filósofo grego Aristóteles, a política deve ser articulada " +
      "pelos homens a fim de alcançar o equilíbrio social.",
    is_connective: false,
    location_in_paragraph_index: 1,
    paragraph_id: 1,
  },
  {
    id: 3,
    text:
      "Em sua obra “O Cidadão de Papel”, o escritor brasileiro Gilberto Dimenstein " +
      "disserta que, embora o país apresente um conjunto de leis bastante " +
      "consistente, elas se atêm, de forma geral, ao plano teórico.",
    is_connective: false,
    location_in_paragraph_index: 1,
    paragraph_id: 1,
  },
  {
    id: 4,
    text:
      "Agostinho de Hipona em certa homilia cunhou um aforismo simples mas " +
      "significativo:'Ama e faz o que quiseres'.",
    is_connective: false,
    location_in_paragraph_index: 1,
    paragraph_id: 1,
  },

  {
    id: 5,
    text: "No entanto,",
    is_connective: true,
    location_in_paragraph_index: 2,
    paragraph_id: 1,
  },
  {
    id: 6,
    text: "Toda via,",
    is_connective: true,
    location_in_paragraph_index: 2,
    paragraph_id: 1,
  },
  {
    id: 7,
    text: "Porém,",
    is_connective: true,
    location_in_paragraph_index: 2,
    paragraph_id: 1,
  },
  {
    id: 8,
    text: "Conquanto,",
    is_connective: true,
    location_in_paragraph_index: 2,
    paragraph_id: 1,
  },
  {
    id: 9,
    text: "Contanto,",
    is_connective: true,
    location_in_paragraph_index: 2,
    paragraph_id: 1,
  },
  {
    id: 10,
    text: "Diante disso,",
    is_connective: true,
    location_in_paragraph_index: 2,
    paragraph_id: 1,
  },

  {
    id: 11,
    text:
      "a 'PROBLEMA' impossibilita que essa parcela da " +
      "população desfrute desse direito " +
      "universal na prática.",
    is_connective: false,
    location_in_paragraph_index: 3,
    paragraph_id: 1,
  },
  {
    id: 12,
    text:
      "a conjuntura dessa análise configura-se no Brasil " +
      "atual, haja vista que, apesar de ser um direito " +
      "constitucionalmente garantido, o 'PROBLEMA' não se " +
      "encontra efetivado.",
    is_connective: false,
    location_in_paragraph_index: 3,
    paragraph_id: 1,
  },

  {
    id: 13,
    text: "Desse modo,",
    is_connective: true,
    location_in_paragraph_index: 4,
    paragraph_id: 1,
  },
  {
    id: 14,
    text: "Nesse contexto,",
    is_connective: true,
    location_in_paragraph_index: 4,
    paragraph_id: 1,
  },
  {
    id: 15,
    text: "Sendo assim,",
    is_connective: true,
    location_in_paragraph_index: 4,
    paragraph_id: 1,
  },
  {
    id: 16,
    text: "Diante disso,",
    is_connective: true,
    location_in_paragraph_index: 4,
    paragraph_id: 1,
  },

  {
    id: 12,
    text:
      "é essencial analisar os principais propulsores " +
      "desse contexto hostil: 'MOTIVO_1' e 'MOTIVO_2'.",
    is_connective: false,
    location_in_paragraph_index: 5,
    paragraph_id: 1,
  },
  {
    id: 12,
    text:
      "não há dúvida de que o/a 'PROBLEMA' é um desafio " +
      "no Brasil; o qual ocorre, infelizmente, devido não " +
      "só ao 'MOTIVO_1', mas também 'ao/por' 'MOTIVO_2'.",
    is_connective: false,
    location_in_paragraph_index: 5,
    paragraph_id: 1,
  },
  {
    id: 12,
    text:
      "esse cenário nefasto ocorre não só em razão do " +
      "'MOTIVO_1', mas também devido à/ao 'MOTIVO_2'.",
    is_connective: false,
    location_in_paragraph_index: 5,
    paragraph_id: 1,
  },
  {
    id: 12,
    text:
      "cabe a observação acerca dos fatores que favorecem " +
      "a questão, com ênfase na/o 'MOTIVO_1' e no/a 'MOTIVO_2'.",
    is_connective: false,
    location_in_paragraph_index: 5,
    paragraph_id: 1,
  },
];
