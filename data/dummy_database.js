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
    id: 17,
    text:
      "é essencial analisar os principais propulsores " +
      "desse contexto hostil: 'MOTIVO_1' e 'MOTIVO_2'.",
    is_connective: false,
    location_in_paragraph_index: 5,
    paragraph_id: 1,
  },
  {
    id: 18,
    text:
      "não há dúvida de que o/a 'PROBLEMA' é um desafio " +
      "no Brasil; o qual ocorre, infelizmente, devido não " +
      "só ao 'MOTIVO_1', mas também 'ao/por' 'MOTIVO_2'.",
    is_connective: false,
    location_in_paragraph_index: 5,
    paragraph_id: 1,
  },
  {
    id: 19,
    text:
      "esse cenário nefasto ocorre não só em razão do " +
      "'MOTIVO_1', mas também devido à/ao 'MOTIVO_2'.",
    is_connective: false,
    location_in_paragraph_index: 5,
    paragraph_id: 1,
  },
  {
    id: 20,
    text:
      "cabe a observação acerca dos fatores que favorecem " +
      "a questão, com ênfase na/o 'MOTIVO_1' e no/a 'MOTIVO_2'.",
    is_connective: false,
    location_in_paragraph_index: 5,
    paragraph_id: 1,
  },
  //===============================================================
  //  DEVELOPMENT 1
  //===============================================================
  {
    id: 21,
    text: "Sob esse viés analítico,",
    is_connective: true,
    location_in_paragraph_index: 1,
    paragraph_id: 2,
  },
  {
    id: 21,
    text: "Sob essa ótica,",
    is_connective: true,
    location_in_paragraph_index: 1,
    paragraph_id: 2,
  },
  {
    id: 21,
    text: "Ademais,",
    is_connective: true,
    location_in_paragraph_index: 1,
    paragraph_id: 2,
  },

  {
    id: 21,
    text: "é importante destacar, a princípio,",
    is_connective: false,
    location_in_paragraph_index: 2,
    paragraph_id: 2,
  },
  {
    id: 21,
    text: "é válido ressaltar, a princípio,",
    is_connective: false,
    location_in_paragraph_index: 2,
    paragraph_id: 2,
  },
  {
    id: 21,
    text: "cabe salientar,",
    is_connective: false,
    location_in_paragraph_index: 2,
    paragraph_id: 2,
  },

  {
    id: 21,
    text:
      "que “MOTIVO_1” é um fato preponderante para " +
      "a ocorrência dessa problemática.",
    is_connective: false,
    location_in_paragraph_index: 3,
    paragraph_id: 2,
  },
  {
    id: 21,
    text: "que “MOTIVO_1” é um ator direto no agravamento desse entrave.",
    is_connective: false,
    location_in_paragraph_index: 3,
    paragraph_id: 2,
  },
  {
    id: 21,
    text:
      "vale ressaltar que a/o “MOTIVO_1” vai de " +
      "encontro com os problemas relacionados à temática.",
    is_connective: false,
    location_in_paragraph_index: 3,
    paragraph_id: 2,
  },

  {
    id: 21,
    text: "Tal situação ocorre, porque,",
    is_connective: true,
    location_in_paragraph_index: 4,
    paragraph_id: 2,
  },
  {
    id: 21,
    text: "Isso acontece, porque,",
    is_connective: true,
    location_in_paragraph_index: 4,
    paragraph_id: 2,
  },
  {
    id: 21,
    text: "Sob esse viés,",
    is_connective: true,
    location_in_paragraph_index: 4,
    paragraph_id: 2,
  },

  {
    id: 21,
    text:
      "Esse cenário decorre do fato de que, assim " +
      "como pontuou o economista-americano Murray " +
      "Rothbard, uma parcela dos representantes " +
      "governamentais, ao se orientar por um viés " +
      "individualista e visar um retorno imediato de " +
      "capital político, negligencia a conservação de " +
      "direitos sociais indispensáveis, como a garantia " +
      "de registro civil.",
    is_connective: false,
    location_in_paragraph_index: 5,
    paragraph_id: 2,
  },
  {
    id: 21,
    text:
      "segundo Michel Foucault, filósofo francês, " +
      "o poder articula-se em uma linguagem que cria " +
      "mecanismos de controle e coerção, os quais " +
      "aumentam a subordinação.",
    is_connective: false,
    location_in_paragraph_index: 5,
    paragraph_id: 2,
  },
  {
    id: 21,
    text:
      "De acordo com o IBGE, 25% dos jovens negros " +
      "já sofreram algum tipo de violência.",
    is_connective: false,
    location_in_paragraph_index: 5,
    paragraph_id: 2,
  },

  {
    id: 21,
    text: "Em decorrência dessa indiligência,",
    is_connective: true,
    location_in_paragraph_index: 6,
    paragraph_id: 2,
  },
  {
    id: 21,
    text: "Desse modo,",
    is_connective: true,
    location_in_paragraph_index: 6,
    paragraph_id: 2,
  },
  {
    id: 21,
    text: "Sob essa ótica,",
    is_connective: true,
    location_in_paragraph_index: 6,
    paragraph_id: 2,
  },

  {
    id: 21,
    text:
      "quando cidadãos não têm acesso a esse " +
      "documento, são excluídos da sociedade e " +
      "não conseguem recorrer às autoridades estatais " +
      "para a defesa de seus direitos, visto que, " +
      "para isso, necessitam de documentos oficiais.",
    is_connective: false,
    location_in_paragraph_index: 7,
    paragraph_id: 2,
  },
  {
    id: 21,
    text:
      "constata-se que o discurso hegemônico " +
      "introduzido, na modernidade, moldou o " +
      "comportamento do cidadão a acreditar que o " +
      "cinema deve se restringir a determinada " +
      "parcela da sociedade, o que enfraquece o " +
      "princípio de que todos indivíduos têm o " +
      "direito ao lazer e ao entretenimento.",
    is_connective: false,
    location_in_paragraph_index: 7,
    paragraph_id: 2,
  },

  {
    id: 21,
    text: "Desse modo,",
    is_connective: true,
    location_in_paragraph_index: 8,
    paragraph_id: 2,
  },
  {
    id: 21,
    text: "Logo,",
    is_connective: true,
    location_in_paragraph_index: 8,
    paragraph_id: 2,
  },
  {
    id: 21,
    text: "Portanto,",
    is_connective: true,
    location_in_paragraph_index: 8,
    paragraph_id: 2,
  },
  {
    id: 21,
    text: "Com isso,",
    is_connective: true,
    location_in_paragraph_index: 8,
    paragraph_id: 2,
  },

  {
    id: 21,
    text: "é notório que o “MOTIVO_1” perpetua o " + "“PROBLEMA”.",
    is_connective: false,
    location_in_paragraph_index: 9,
    paragraph_id: 2,
  },
  {
    id: 21,
    text:
      "compara-se que a ausência desse registro " +
      "causa a marginalização de indivíduos no Brasil.",
    is_connective: false,
    location_in_paragraph_index: 9,
    paragraph_id: 2,
  },
  {
    id: 21,
    text:
      "com a concepção instituída da produção " +
      "cinematográfica como diversão das camadas " +
      "altas, o cinema adquire o caráter elitista, " +
      "o qual contribui com a exclusão do restante " +
      "da população.",
    is_connective: false,
    location_in_paragraph_index: 9,
    paragraph_id: 2,
  },
  //===============================================================
  //  DEVELOPMENT 2
  //===============================================================
  {
    id: 21,
    text: "Além disso, podemos destacar,",
    is_connective: true,
    location_in_paragraph_index: 1,
    paragraph_id: 3,
  },
  {
    id: 21,
    text: "Faz-se mister salientar,",
    is_connective: true,
    location_in_paragraph_index: 1,
    paragraph_id: 3,
  },
  {
    id: 21,
    text: "Paralelo a isso,",
    is_connective: true,
    location_in_paragraph_index: 1,
    paragraph_id: 3,
  },
  {
    id: 21,
    text: "Faz-se mister, ainda, salientar",
    is_connective: true,
    location_in_paragraph_index: 1,
    paragraph_id: 3,
  },
  {
    id: 21,
    text: "Ademais,",
    is_connective: true,
    location_in_paragraph_index: 1,
    paragraph_id: 3,
  },

  {
    id: 21,
    text: "“MOTIVO_2” como impulsionador do problema.",
    is_connective: false,
    location_in_paragraph_index: 2,
    paragraph_id: 3,
  },
  {
    id: 21,
    text: "que a/o “MOTIVO_2” potencializa essa conjuntura.",
    is_connective: false,
    location_in_paragraph_index: 2,
    paragraph_id: 3,
  },
  {
    id: 21,
    text: "a “MOTIVO_2” impede a/o “SOLUÇÃO DO PROBLEMA”",
    is_connective: false,
    location_in_paragraph_index: 2,
    paragraph_id: 3,
  },
  {
    id: 21,
    text:
      "vale ressaltar que a/o “MOTIVO_1” vai de " +
      "encontro com os problemas relacionados à temática.",
    is_connective: false,
    location_in_paragraph_index: 2,
    paragraph_id: 3,
  },

  {
    id: 21,
    text: "Sob essa perspectiva,",
    is_connective: true,
    location_in_paragraph_index: 3,
    paragraph_id: 3,
  },
  {
    id: 21,
    text: "Nesse sentido,",
    is_connective: true,
    location_in_paragraph_index: 3,
    paragraph_id: 3,
  },
  {
    id: 21,
    text: "Nessa perspectiva,",
    is_connective: true,
    location_in_paragraph_index: 3,
    paragraph_id: 3,
  },
  {
    id: 21,
    text: "Isso acontece, porque,",
    is_connective: true,
    location_in_paragraph_index: 3,
    paragraph_id: 3,
  },

  {
    id: 21,
    text:
      "desde o século XX, com a implementação de " +
      "um formato tradicionalista de ensino pelo " +
      "ex-presidente Vargas, cristalizou-se um modelo " +
      "educacional que negligencia o aprendizado de " +
      "temas transversais, a exemplo de concepções " +
      "básicas acerca da cidadania.",
    is_connective: false,
    location_in_paragraph_index: 4,
    paragraph_id: 3,
  },
  {
    id: 21,
    text:
      "a Constituição Federal Brasileira garante, " +
      "em seu 6º artigo, que todo cidadão tem direito " +
      "de acesso à saúde, à educação, ao trabalho, à " +
      "moradia, entre outros, objetivando assegurar " +
      "não só direitos básicos, como também a " +
      "possibilidade de ascender socialmente.",
    is_connective: false,
    location_in_paragraph_index: 4,
    paragraph_id: 3,
  },
  {
    id: 21,
    text:
      "na teoria da percepção do estado da " +
      "sociedade, de Émile Durkheim, sociólogo " +
      "francês, abrangem-se duas divisões: " +
      "'normal e patológico.'",
    is_connective: false,
    location_in_paragraph_index: 4,
    paragraph_id: 3,
  },

  {
    id: 21,
    text: "Seguindo essa linha de pensamento,",
    is_connective: true,
    location_in_paragraph_index: 5,
    paragraph_id: 3,
  },
  {
    id: 21,
    text: "Contudo,",
    is_connective: true,
    location_in_paragraph_index: 5,
    paragraph_id: 3,
  },
  {
    id: 21,
    text: "Nessa perspectiva,",
    is_connective: true,
    location_in_paragraph_index: 5,
    paragraph_id: 3,
  },

  {
    id: 21,
    text:
      "com o desconhecimento por parte da " +
      "população - oriundo da escassez instrutiva " +
      "- sobre a relevância da garantia de direitos, " +
      "há uma inviabilização da situação sofrida " +
      "pelas pessoas que não possuem documentos " +
      "basilares, como a certidão de nascimento.",
    is_connective: false,
    location_in_paragraph_index: 6,
    paragraph_id: 3,
  },
  {
    id: 21,
    text:
      "quando uma pessoa não consegue obter " +
      "esse documento, todas as suas garantias " +
      "fundamentais são negligenciadas, impedindo " +
      "que esse cidadão frequente a escola, obtenha " +
      "registro trabalhista, acesse a universidade " +
      "e alcance bons salários e alto nível de " +
      "instrução profissional.",
    is_connective: false,
    location_in_paragraph_index: 6,
    paragraph_id: 3,
  },
  {
    id: 21,
    text:
      "observa-se que um ambiente patológico, " +
      "em crise, rompe com o seu desenvolvimento, " +
      "visto que um sistema desigual não favorece " +
      "o progresso coletivo.",
    is_connective: false,
    location_in_paragraph_index: 6,
    paragraph_id: 3,
  },

  {
    id: 21,
    text: "Dessa forma,",
    is_connective: true,
    location_in_paragraph_index: 7,
    paragraph_id: 3,
  },
  {
    id: 21,
    text: "Portanto,",
    is_connective: true,
    location_in_paragraph_index: 7,
    paragraph_id: 3,
  },
  {
    id: 21,
    text: "Com isso,",
    is_connective: true,
    location_in_paragraph_index: 7,
    paragraph_id: 3,
  },

  {
    id: 21,
    text:
      "é imprescindível combater a falha do " +
      "processo educacional, visto que marginaliza " +
      "uma classe da sociedade.",
    is_connective: false,
    location_in_paragraph_index: 8,
    paragraph_id: 3,
  },
  {
    id: 21,
    text:
      "a ausência da certidão de nascimento " +
      "impede a ascensão social dos brasileiros.",
    is_connective: false,
    location_in_paragraph_index: 8,
    paragraph_id: 3,
  },
  {
    id: 21,
    text:
      "com a disponibilidade de ir ao cinema " +
      "mediada pelo preço — que não leva em " +
      "consideração a renda regional —, a " +
      "democratização torna-se inviável.",
    is_connective: false,
    location_in_paragraph_index: 8,
    paragraph_id: 3,
  },
  {
    id: 21,
    text: "em virtude do/da “MOTIVO_2” , a problemática se mantém no país.",
    is_connective: false,
    location_in_paragraph_index: 8,
    paragraph_id: 3,
  },
  //===============================================================
  //  CONCLUSION
  //===============================================================
  {
    id: 21,
    text: "Depreende-se, portanto,",
    is_connective: true,
    location_in_paragraph_index: 1,
    paragraph_id: 4,
  },
  {
    id: 21,
    text: "Portanto,",
    is_connective: true,
    location_in_paragraph_index: 1,
    paragraph_id: 4,
  },
  {
    id: 21,
    text: "Portanto, indubitavelmente,",
    is_connective: true,
    location_in_paragraph_index: 1,
    paragraph_id: 4,
  },
  {
    id: 21,
    text: "É evidente, portanto,",
    is_connective: true,
    location_in_paragraph_index: 1,
    paragraph_id: 4,
  },
  {
    id: 21,
    text: "Infere-se, portanto,",
    is_connective: true,
    location_in_paragraph_index: 1,
    paragraph_id: 4,
  },

  {
    id: 21,
    text: "a adoção de medidas para mitigar a problemática apresentada.",
    is_connective: false,
    location_in_paragraph_index: 2,
    paragraph_id: 4,
  },
  {
    id: 21,
    text: "a relevância da/o “SOLUÇÃO DO PROBLEMA”.",
    is_connective: false,
    location_in_paragraph_index: 2,
    paragraph_id: 4,
  },
  {
    id: 21,
    text:
      "para mitigar o/a “PROBLEMA RESUMIDO” " +
      "causada pela/o “MOTIVO_1” e “MOTIVO_2” é necessário: ",
    is_connective: false,
    location_in_paragraph_index: 2,
    paragraph_id: 4,
  },
  {
    id: 21,
    text:
      "a necessidade de medidas que solucionem " +
      "os desafios impostos à/ao “PROBLEMA”",
    is_connective: false,
    location_in_paragraph_index: 2,
    paragraph_id: 4,
  },
  {
    id: 21,
    text:
      "que ainda há entraves para garantir " +
      "a solidificação de políticas que " +
      "visem à construção de um mundo melhor.",
    is_connective: false,
    location_in_paragraph_index: 2,
    paragraph_id: 4,
  },
  {
    id: 21,
    text: "medidas são necessárias para resolver esse problema.",
    is_connective: false,
    location_in_paragraph_index: 2,
    paragraph_id: 4,
  },

  {
    id: 21,
    text: "Por isso,",
    is_connective: true,
    location_in_paragraph_index: 3,
    paragraph_id: 4,
  },
  {
    id: 21,
    text: "Para que isso ocorra,",
    is_connective: true,
    location_in_paragraph_index: 3,
    paragraph_id: 4,
  },
  {
    id: 21,
    text: "Para que isso ocorra, é necessário que",
    is_connective: true,
    location_in_paragraph_index: 3,
    paragraph_id: 4,
  },

  {
    id: 21,
    text:
      "o/a “AGENTE” proporcione “AÇÃO”, " +
      "por meio de/a “MEIO/MODO”, a fim de “FINALIDADE”.",
    is_connective: false,
    location_in_paragraph_index: 4,
    paragraph_id: 4,
  },
  {
    id: 21,
    text:
      "o/a “AGENTE” por meio de/a “MEIO/MODO”, " +
      "proporcione “AÇÃO”, a fim de “FINALIDADE”.",
    is_connective: false,
    location_in_paragraph_index: 4,
    paragraph_id: 4,
  },
  {
    id: 21,
    text:
      "cabe o/a “AGENTE” proporcione “AÇÃO”, " +
      "por meio de/a “MEIO/MODO”, a fim de “FINALIDADE”.",
    is_connective: false,
    location_in_paragraph_index: 4,
    paragraph_id: 4,
  },
  {
    id: 21,
    text:
      "concerne à/ao “AGENTE” que proporcione " +
      "“AÇÃO”, por meio de/a “MEIO/MODO”, a fim de “FINALIDADE”.",
    is_connective: false,
    location_in_paragraph_index: 4,
    paragraph_id: 4,
  },
  {
    id: 21,
    text:
      "concerne à/ao “AGENTE” o fomento " +
      "de/da “AÇÃO”, por meio de/a “MEIO/MODO”, a fim de “FINALIDADE”.",
    is_connective: false,
    location_in_paragraph_index: 4,
    paragraph_id: 4,
  },

  {
    id: 21,
    text: "Ademais",
    is_connective: true,
    location_in_paragraph_index: 5,
    paragraph_id: 4,
  },

  {
    id: 21,
    text:
      "o/a “AGENTE” proporcione “AÇÃO”, " +
      "por meio de/a “MEIO/MODO”, a fim de “FINALIDADE”.",
    is_connective: false,
    location_in_paragraph_index: 6,
    paragraph_id: 4,
  },
  {
    id: 21,
    text:
      "o/a “AGENTE” por meio de/a “MEIO/MODO”, " +
      "proporcione “AÇÃO”, a fim de “FINALIDADE”.",
    is_connective: false,
    location_in_paragraph_index: 6,
    paragraph_id: 4,
  },
  {
    id: 21,
    text:
      "cabe o/a “AGENTE” proporcione “AÇÃO”, " +
      "por meio de/a “MEIO/MODO”, a fim de “FINALIDADE”.",
    is_connective: false,
    location_in_paragraph_index: 6,
    paragraph_id: 4,
  },
  {
    id: 21,
    text:
      "concerne à/ao “AGENTE” que proporcione " +
      "“AÇÃO”, por meio de/a “MEIO/MODO”, a fim de “FINALIDADE”.",
    is_connective: false,
    location_in_paragraph_index: 6,
    paragraph_id: 4,
  },
  {
    id: 21,
    text:
      "concerne à/ao “AGENTE” o fomento " +
      "de/da “AÇÃO”, por meio de/a “MEIO/MODO”, a fim de “FINALIDADE”.",
    is_connective: false,
    location_in_paragraph_index: 6,
    paragraph_id: 4,
  },

  {
    id: 21,
    text: "Assim,",
    is_connective: true,
    location_in_paragraph_index: 7,
    paragraph_id: 4,
  },
  {
    id: 21,
    text: "Dessa maneira,",
    is_connective: true,
    location_in_paragraph_index: 7,
    paragraph_id: 4,
  },
  {
    id: 21,
    text: "Dessa forma,",
    is_connective: true,
    location_in_paragraph_index: 7,
    paragraph_id: 4,
  },

  {
    id: 21,
    text: "o Brasil poderia superar o “PROBLEMA”.",
    is_connective: false,
    location_in_paragraph_index: 8,
    paragraph_id: 4,
  },
  {
    id: 21,
    text:
      "A partir dessas ações, espera-se promover " +
      "uma melhora das condições educacionais " +
      "e sociais desse grupo.",
    is_connective: false,
    location_in_paragraph_index: 8,
    paragraph_id: 4,
  },
  {
    id: 21,
    text: "o ideal do “PENSADOR” será, de fato, uma realidade no país.",
    is_connective: false,
    location_in_paragraph_index: 8,
    paragraph_id: 4,
  },
  {
    id: 21,
    text:
      "o propósito principal da Declaração " +
      "Universal dos Direitos Humanos será " +
      "realidade no Brasil.",
    is_connective: false,
    location_in_paragraph_index: 8,
    paragraph_id: 4,
  },
  {
    id: 21,
    text: "haverá um ambiente estável que colabore com o “SOLUÇÃO” no país.",
    is_connective: false,
    location_in_paragraph_index: 8,
    paragraph_id: 4,
  },
];
