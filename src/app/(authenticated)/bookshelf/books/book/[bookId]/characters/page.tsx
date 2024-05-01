'use client';
// A página é client side apenas para o momento de criação do layout após add o servidor de back passa a ser server side
import { ButtonEst } from '@/components/basic/buttons';
import { InforBox } from '@/components/basic/inforBox';
import { Template } from '@/components/layout/template';
import { useState } from 'react';

interface ParamsProps {
  bookId: string;
}

interface CharactersRequestGetProps {
  uuid: string;
  book: string;
  ExplanatoryText: string;
  total: number;
  limit: number;
  characters: characterProps[];
}

export interface characterProps {
  name: string;
  createdDate: string;
  updatedDate: string;
  image: string | null;
  physhicalDescription: string | null;
  personality: string | null;
  roleStory: string | null;
  relationships: string | null;
  developmentArc: string | null;
  motivations: string | null;
  backstory: string | null;
  significantQuotes: {
    date: string;
    text: string;
  }[]
  comments: {
    date: string;
    text: string;
  }[]
}

export default function BookCharacters ({ params }:{ params:ParamsProps }) {

  const characters: CharactersRequestGetProps = {
    uuid: params.bookId,
    book: 'Harry Potter e o prisioneiro de Azkaban',
    ExplanatoryText:
    `
    Ao registrar um personagem, comece descrevendo suas características mais distintivas, 
    como nome, aparência física e personalidade. 
    Em seguida, destaque seu papel na história até o momento e seus relacionamentos com outros personagens. 
    Conforme avançar na leitura, sinta-se à vontade para adicionar ou editar informações conforme novos 
    detalhes surgirem. Lembre-se de que acompanhar os personagens é fundamental para compreender 
    plenamente a história, pois isso ajuda a identificar padrões, desenvolvimentos e motivos subjacentes. 
    Mantenha suas anotações organizadas e atualizadas para aproveitar ao máximo sua experiência de 
    leitura e enriquecer sua compreensão do mundo e dos personagens criados pelo autor.
    `,
    total: 5,
    limit: 5,
    characters: [
      {
        name: 'Harry Potter',
        createdDate: '22/04/2024',
        updatedDate: '22/04/2024',
        image: '/images/harry_potter.jpg',
        physhicalDescription: `Harry é descrito como tendo cabelos pretos desalinhados, 
        olhos verdes e uma cicatriz em forma de raio na testa. 
        Ele usa óculos redondos. Tem pele branca e deve ter em volta de 1,75 de altura.
        Franzino deve pesar 70 kg.`,
        personality: `Harry é corajoso, leal e engenhoso. 
        Ele também é conhecido por seu senso de justiça e disposição para enfrentar a injustiça, 
        mesmo correndo riscos pessoais.`,
        roleStory: `Harry é o protagonista da série e desempenha um papel central na trama 
        de "Prisioneiro de Azkaban". 
        Ele descobre sobre Sirius Black, seu padrinho e suposto assassino de seus pais, 
        e busca descobrir a verdade sobre seu passado.`,
        relationships: `Harry tem relacionamentos próximos com seus amigos Rony Weasley e Hermione Granger. 
        Ele também forma um vínculo com Sirius Black e aprende mais sobre seus pais através dele.`,
        developmentArc: `Em "Prisioneiro de Azkaban", Harry experimenta um crescimento em seu entendimento 
        de seu passado e sua relação com seus pais. 
        Ele também aprende a enfrentar seus medos e dúvidas, 
        especialmente em relação à sua conexão com Sirius Black e à verdade sobre as mortes de seus pais.`,
        motivations: `A principal motivação de Harry é buscar justiça para seus pais e proteger 
        a si mesmo e aos seus entes queridos de danos. 
        Ele é impulsionado pelo desejo de descobrir a verdade e enfrentar os desafios que enfrenta.`,
        backstory: `A história pessoal de Harry inclui a morte trágica de seus pais, 
        Lily e James Potter, pelas mãos de Lord Voldemort. 
        Ele sobreviveu à Maldição da Morte, que deixou nele a cicatriz em forma de raio na testa. 
        Harry foi criado por sua tia e tio, os Dursleys, que o trataram mal.`,
        significantQuotes: [
          {
            date: '21/04/2024',
            text: `"Juro solenemente não fazer nada de bom", 
            dito por Harry ao ativar o Mapa do Maroto. 
            Essa citação reflete o lado travesso de Harry e sua disposição para burlar as regras 
            em busca de seus objetivos.`
          },
          {
            date: '21/04/2024',
            text: `"Não vale a pena viver sonhando e se esquecer de viver.". 
            Esta citação de Harry Potter ressoa com muitos leitores, 
            pois destaca a importância de viver o presente e aproveitar cada momento, 
            mesmo em meio a desafios e adversidades. É um lembrete poderoso para valorizar o aqui e agora.`
          },
          {
            date: '21/04/2024',
            text: `"As cicatrizes? Ah, sim. As cicatrizes são ótimas. Elas mostram que o passado foi real.". 
            Esta frase de Harry reflete sua jornada de autodescoberta e aceitação de seu passado. 
            Para muitos leitores, isso é reconfortante, pois mostra que nossas experiências passadas, 
            mesmo as dolorosas, nos moldam e nos tornam quem somos.`
          },
          {
            date: '21/04/2024',
            text: `"As palavras são, na minha não tão humilde opinião, nossa mais inesgotável fonte de magia, capazes de ferir e de curar.". 
            sta citação de Harry Potter ressalta o poder das palavras e da comunicação. 
            Ela inspira os leitores a refletir sobre como suas palavras podem impactar os outros, 
            tanto positiva quanto negativamente, e a importância de usá-las com sabedoria.`
          },
          {
            date: '21/04/2024',
            text: `"A felicidade pode ser encontrada mesmo nos momentos mais sombrios, se alguém se lembrar de acender a luz.". 
            Esta famosa frase de Dumbledore, compartilhada com Harry, ressalta a importância da 
            esperança e da perseverança, mesmo em tempos difíceis. 
            Para muitos leitores, isso representa uma mensagem de otimismo e 
            resiliência que ressoa profundamente.`
          }
        ],
        comments: [
          {
            date: '24/04/2024',
            text: `Harry é um personagem incrivelmente cativante. 
            Sua coragem e determinação inspiram os leitores a enfrentar seus próprios desafios. 
            Sua jornada de autodescoberta e crescimento ao longo dos livros é emocionante de acompanhar.`
          },
          {
            date: '24/04/2024',
            text: `Eu admiro a resiliência de Harry diante das adversidades. 
            Mesmo enfrentando perigos mortais e tendo um passado tão sombrio, 
            ele continua a lutar pelo que é certo. 
            Sua lealdade aos amigos e sua capacidade de perdoar são qualidades que todos podemos aprender.`
          },
          {
            date: '24/04/2024',
            text: `Harry é um herói imperfeito, e é isso que o torna tão humano e real para mim. 
            Ele comete erros, duvida de si mesmo e lida com suas próprias inseguranças, 
            mas sempre encontra uma maneira de superar. 
            Sua jornada é uma fonte de inspiração e esperança.`
          },
          {
            date: '24/04/2024',
            text: `A relação de Harry com Sirius Black é uma das partes mais emocionantes da história para mim. 
            Ver Harry descobrir mais sobre seus pais e encontrar uma figura paterna em Sirius 
            é comovente e adiciona uma dimensão extra à sua jornada.`
          },
          {
            date: '24/04/2024',
            text: `Harry não é apenas um personagem principal; ele é um símbolo de resistência e esperança 
            para todos os que enfrentam o mal. Sua determinação em enfrentar Voldemort e proteger aqueles 
            que ama é o que o torna verdadeiramente memorável.`
          }
        ]
      },
      {
        name: 'Harry Potter',
        createdDate: '22/04/2024',
        updatedDate: '22/04/2024',
        image: '/images/harry_potter.jpg',
        physhicalDescription: 'Harry é descrito como tendo cabelos pretos desalinhados, olhos verdes e uma cicatriz em forma de raio na testa. Ele usa óculos redondos.',
        personality: `Harry é corajoso, leal e engenhoso. 
        Ele também é conhecido por seu senso de justiça e disposição para enfrentar a injustiça, 
        mesmo correndo riscos pessoais.`,
        roleStory: `Harry é o protagonista da série e desempenha um papel central na trama 
        de "Prisioneiro de Azkaban". 
        Ele descobre sobre Sirius Black, seu padrinho e suposto assassino de seus pais, 
        e busca descobrir a verdade sobre seu passado.`,
        relationships: `Harry tem relacionamentos próximos com seus amigos Rony Weasley e Hermione Granger. 
        Ele também forma um vínculo com Sirius Black e aprende mais sobre seus pais através dele.`,
        developmentArc: `Em "Prisioneiro de Azkaban", Harry experimenta um crescimento em seu entendimento 
        de seu passado e sua relação com seus pais. 
        Ele também aprende a enfrentar seus medos e dúvidas, 
        especialmente em relação à sua conexão com Sirius Black e à verdade sobre as mortes de seus pais.`,
        motivations: `A principal motivação de Harry é buscar justiça para seus pais e proteger 
        a si mesmo e aos seus entes queridos de danos. 
        Ele é impulsionado pelo desejo de descobrir a verdade e enfrentar os desafios que enfrenta.`,
        backstory: `A história pessoal de Harry inclui a morte trágica de seus pais, 
        Lily e James Potter, pelas mãos de Lord Voldemort. 
        Ele sobreviveu à Maldição da Morte, que deixou nele a cicatriz em forma de raio na testa. 
        Harry foi criado por sua tia e tio, os Dursleys, que o trataram mal.`,
        significantQuotes: [
          {
            date: '21/04/2024',
            text: `"Juro solenemente não fazer nada de bom", 
            dito por Harry ao ativar o Mapa do Maroto. 
            Essa citação reflete o lado travesso de Harry e sua disposição para burlar as regras 
            em busca de seus objetivos.`
          },
          {
            date: '21/04/2024',
            text: `"Não vale a pena viver sonhando e se esquecer de viver.". 
            Esta citação de Harry Potter ressoa com muitos leitores, 
            pois destaca a importância de viver o presente e aproveitar cada momento, 
            mesmo em meio a desafios e adversidades. É um lembrete poderoso para valorizar o aqui e agora.`
          },
          {
            date: '21/04/2024',
            text: `"As cicatrizes? Ah, sim. As cicatrizes são ótimas. Elas mostram que o passado foi real.". 
            Esta frase de Harry reflete sua jornada de autodescoberta e aceitação de seu passado. 
            Para muitos leitores, isso é reconfortante, pois mostra que nossas experiências passadas, 
            mesmo as dolorosas, nos moldam e nos tornam quem somos.`
          },
          {
            date: '21/04/2024',
            text: `"As palavras são, na minha não tão humilde opinião, nossa mais inesgotável fonte de magia, capazes de ferir e de curar.". 
            sta citação de Harry Potter ressalta o poder das palavras e da comunicação. 
            Ela inspira os leitores a refletir sobre como suas palavras podem impactar os outros, 
            tanto positiva quanto negativamente, e a importância de usá-las com sabedoria.`
          },
          {
            date: '21/04/2024',
            text: `"A felicidade pode ser encontrada mesmo nos momentos mais sombrios, se alguém se lembrar de acender a luz.". 
            Esta famosa frase de Dumbledore, compartilhada com Harry, ressalta a importância da 
            esperança e da perseverança, mesmo em tempos difíceis. 
            Para muitos leitores, isso representa uma mensagem de otimismo e 
            resiliência que ressoa profundamente.`
          }
        ],
        comments: [
          {
            date: '24/04/2024',
            text: `Harry é um personagem incrivelmente cativante. 
            Sua coragem e determinação inspiram os leitores a enfrentar seus próprios desafios. 
            Sua jornada de autodescoberta e crescimento ao longo dos livros é emocionante de acompanhar.`
          },
          {
            date: '24/04/2024',
            text: `Eu admiro a resiliência de Harry diante das adversidades. 
            Mesmo enfrentando perigos mortais e tendo um passado tão sombrio, 
            ele continua a lutar pelo que é certo. 
            Sua lealdade aos amigos e sua capacidade de perdoar são qualidades que todos podemos aprender.`
          },
          {
            date: '24/04/2024',
            text: `Harry é um herói imperfeito, e é isso que o torna tão humano e real para mim. 
            Ele comete erros, duvida de si mesmo e lida com suas próprias inseguranças, 
            mas sempre encontra uma maneira de superar. 
            Sua jornada é uma fonte de inspiração e esperança.`
          },
          {
            date: '24/04/2024',
            text: `A relação de Harry com Sirius Black é uma das partes mais emocionantes da história para mim. 
            Ver Harry descobrir mais sobre seus pais e encontrar uma figura paterna em Sirius 
            é comovente e adiciona uma dimensão extra à sua jornada.`
          },
          {
            date: '24/04/2024',
            text: `Harry não é apenas um personagem principal; ele é um símbolo de resistência e esperança 
            para todos os que enfrentam o mal. Sua determinação em enfrentar Voldemort e proteger aqueles 
            que ama é o que o torna verdadeiramente memorável.`
          }
        ]
      },
      {
        name: 'Harry Potter',
        createdDate: '22/04/2024',
        updatedDate: '22/04/2024',
        image: '/images/harry_potter.jpg',
        physhicalDescription: 'Harry é descrito como tendo cabelos pretos desalinhados, olhos verdes e uma cicatriz em forma de raio na testa. Ele usa óculos redondos.',
        personality: `Harry é corajoso, leal e engenhoso. 
        Ele também é conhecido por seu senso de justiça e disposição para enfrentar a injustiça, 
        mesmo correndo riscos pessoais.`,
        roleStory: `Harry é o protagonista da série e desempenha um papel central na trama 
        de "Prisioneiro de Azkaban". 
        Ele descobre sobre Sirius Black, seu padrinho e suposto assassino de seus pais, 
        e busca descobrir a verdade sobre seu passado.`,
        relationships: `Harry tem relacionamentos próximos com seus amigos Rony Weasley e Hermione Granger. 
        Ele também forma um vínculo com Sirius Black e aprende mais sobre seus pais através dele.`,
        developmentArc: `Em "Prisioneiro de Azkaban", Harry experimenta um crescimento em seu entendimento 
        de seu passado e sua relação com seus pais. 
        Ele também aprende a enfrentar seus medos e dúvidas, 
        especialmente em relação à sua conexão com Sirius Black e à verdade sobre as mortes de seus pais.`,
        motivations: `A principal motivação de Harry é buscar justiça para seus pais e proteger 
        a si mesmo e aos seus entes queridos de danos. 
        Ele é impulsionado pelo desejo de descobrir a verdade e enfrentar os desafios que enfrenta.`,
        backstory: `A história pessoal de Harry inclui a morte trágica de seus pais, 
        Lily e James Potter, pelas mãos de Lord Voldemort. 
        Ele sobreviveu à Maldição da Morte, que deixou nele a cicatriz em forma de raio na testa. 
        Harry foi criado por sua tia e tio, os Dursleys, que o trataram mal.`,
        significantQuotes: [
          {
            date: '21/04/2024',
            text: `"Juro solenemente não fazer nada de bom", 
            dito por Harry ao ativar o Mapa do Maroto. 
            Essa citação reflete o lado travesso de Harry e sua disposição para burlar as regras 
            em busca de seus objetivos.`
          },
          {
            date: '21/04/2024',
            text: `"Não vale a pena viver sonhando e se esquecer de viver.". 
            Esta citação de Harry Potter ressoa com muitos leitores, 
            pois destaca a importância de viver o presente e aproveitar cada momento, 
            mesmo em meio a desafios e adversidades. É um lembrete poderoso para valorizar o aqui e agora.`
          },
          {
            date: '21/04/2024',
            text: `"As cicatrizes? Ah, sim. As cicatrizes são ótimas. Elas mostram que o passado foi real.". 
            Esta frase de Harry reflete sua jornada de autodescoberta e aceitação de seu passado. 
            Para muitos leitores, isso é reconfortante, pois mostra que nossas experiências passadas, 
            mesmo as dolorosas, nos moldam e nos tornam quem somos.`
          },
          {
            date: '21/04/2024',
            text: `"As palavras são, na minha não tão humilde opinião, nossa mais inesgotável fonte de magia, capazes de ferir e de curar.". 
            sta citação de Harry Potter ressalta o poder das palavras e da comunicação. 
            Ela inspira os leitores a refletir sobre como suas palavras podem impactar os outros, 
            tanto positiva quanto negativamente, e a importância de usá-las com sabedoria.`
          },
          {
            date: '21/04/2024',
            text: `"A felicidade pode ser encontrada mesmo nos momentos mais sombrios, se alguém se lembrar de acender a luz.". 
            Esta famosa frase de Dumbledore, compartilhada com Harry, ressalta a importância da 
            esperança e da perseverança, mesmo em tempos difíceis. 
            Para muitos leitores, isso representa uma mensagem de otimismo e 
            resiliência que ressoa profundamente.`
          }
        ],
        comments: [
          {
            date: '24/04/2024',
            text: `Harry é um personagem incrivelmente cativante. 
            Sua coragem e determinação inspiram os leitores a enfrentar seus próprios desafios. 
            Sua jornada de autodescoberta e crescimento ao longo dos livros é emocionante de acompanhar.`
          },
          {
            date: '24/04/2024',
            text: `Eu admiro a resiliência de Harry diante das adversidades. 
            Mesmo enfrentando perigos mortais e tendo um passado tão sombrio, 
            ele continua a lutar pelo que é certo. 
            Sua lealdade aos amigos e sua capacidade de perdoar são qualidades que todos podemos aprender.`
          },
          {
            date: '24/04/2024',
            text: `Harry é um herói imperfeito, e é isso que o torna tão humano e real para mim. 
            Ele comete erros, duvida de si mesmo e lida com suas próprias inseguranças, 
            mas sempre encontra uma maneira de superar. 
            Sua jornada é uma fonte de inspiração e esperança.`
          },
          {
            date: '24/04/2024',
            text: `A relação de Harry com Sirius Black é uma das partes mais emocionantes da história para mim. 
            Ver Harry descobrir mais sobre seus pais e encontrar uma figura paterna em Sirius 
            é comovente e adiciona uma dimensão extra à sua jornada.`
          },
          {
            date: '24/04/2024',
            text: `Harry não é apenas um personagem principal; ele é um símbolo de resistência e esperança 
            para todos os que enfrentam o mal. Sua determinação em enfrentar Voldemort e proteger aqueles 
            que ama é o que o torna verdadeiramente memorável.`
          }
        ]
      },
      {
        name: 'Harry Potter',
        createdDate: '22/04/2024',
        updatedDate: '22/04/2024',
        image: '/images/harry_potter.jpg',
        physhicalDescription: 'Harry é descrito como tendo cabelos pretos desalinhados, olhos verdes e uma cicatriz em forma de raio na testa. Ele usa óculos redondos.',
        personality: `Harry é corajoso, leal e engenhoso. 
        Ele também é conhecido por seu senso de justiça e disposição para enfrentar a injustiça, 
        mesmo correndo riscos pessoais.`,
        roleStory: `Harry é o protagonista da série e desempenha um papel central na trama 
        de "Prisioneiro de Azkaban". 
        Ele descobre sobre Sirius Black, seu padrinho e suposto assassino de seus pais, 
        e busca descobrir a verdade sobre seu passado.`,
        relationships: `Harry tem relacionamentos próximos com seus amigos Rony Weasley e Hermione Granger. 
        Ele também forma um vínculo com Sirius Black e aprende mais sobre seus pais através dele.`,
        developmentArc: `Em "Prisioneiro de Azkaban", Harry experimenta um crescimento em seu entendimento 
        de seu passado e sua relação com seus pais. 
        Ele também aprende a enfrentar seus medos e dúvidas, 
        especialmente em relação à sua conexão com Sirius Black e à verdade sobre as mortes de seus pais.`,
        motivations: `A principal motivação de Harry é buscar justiça para seus pais e proteger 
        a si mesmo e aos seus entes queridos de danos. 
        Ele é impulsionado pelo desejo de descobrir a verdade e enfrentar os desafios que enfrenta.`,
        backstory: `A história pessoal de Harry inclui a morte trágica de seus pais, 
        Lily e James Potter, pelas mãos de Lord Voldemort. 
        Ele sobreviveu à Maldição da Morte, que deixou nele a cicatriz em forma de raio na testa. 
        Harry foi criado por sua tia e tio, os Dursleys, que o trataram mal.`,
        significantQuotes: [
          {
            date: '21/04/2024',
            text: `"Juro solenemente não fazer nada de bom", 
            dito por Harry ao ativar o Mapa do Maroto. 
            Essa citação reflete o lado travesso de Harry e sua disposição para burlar as regras 
            em busca de seus objetivos.`
          },
          {
            date: '21/04/2024',
            text: `"Não vale a pena viver sonhando e se esquecer de viver.". 
            Esta citação de Harry Potter ressoa com muitos leitores, 
            pois destaca a importância de viver o presente e aproveitar cada momento, 
            mesmo em meio a desafios e adversidades. É um lembrete poderoso para valorizar o aqui e agora.`
          },
          {
            date: '21/04/2024',
            text: `"As cicatrizes? Ah, sim. As cicatrizes são ótimas. Elas mostram que o passado foi real.". 
            Esta frase de Harry reflete sua jornada de autodescoberta e aceitação de seu passado. 
            Para muitos leitores, isso é reconfortante, pois mostra que nossas experiências passadas, 
            mesmo as dolorosas, nos moldam e nos tornam quem somos.`
          },
          {
            date: '21/04/2024',
            text: `"As palavras são, na minha não tão humilde opinião, nossa mais inesgotável fonte de magia, capazes de ferir e de curar.". 
            sta citação de Harry Potter ressalta o poder das palavras e da comunicação. 
            Ela inspira os leitores a refletir sobre como suas palavras podem impactar os outros, 
            tanto positiva quanto negativamente, e a importância de usá-las com sabedoria.`
          },
          {
            date: '21/04/2024',
            text: `"A felicidade pode ser encontrada mesmo nos momentos mais sombrios, se alguém se lembrar de acender a luz.". 
            Esta famosa frase de Dumbledore, compartilhada com Harry, ressalta a importância da 
            esperança e da perseverança, mesmo em tempos difíceis. 
            Para muitos leitores, isso representa uma mensagem de otimismo e 
            resiliência que ressoa profundamente.`
          }
        ],
        comments: [
          {
            date: '24/04/2024',
            text: `Harry é um personagem incrivelmente cativante. 
            Sua coragem e determinação inspiram os leitores a enfrentar seus próprios desafios. 
            Sua jornada de autodescoberta e crescimento ao longo dos livros é emocionante de acompanhar.`
          },
          {
            date: '24/04/2024',
            text: `Eu admiro a resiliência de Harry diante das adversidades. 
            Mesmo enfrentando perigos mortais e tendo um passado tão sombrio, 
            ele continua a lutar pelo que é certo. 
            Sua lealdade aos amigos e sua capacidade de perdoar são qualidades que todos podemos aprender.`
          },
          {
            date: '24/04/2024',
            text: `Harry é um herói imperfeito, e é isso que o torna tão humano e real para mim. 
            Ele comete erros, duvida de si mesmo e lida com suas próprias inseguranças, 
            mas sempre encontra uma maneira de superar. 
            Sua jornada é uma fonte de inspiração e esperança.`
          },
          {
            date: '24/04/2024',
            text: `A relação de Harry com Sirius Black é uma das partes mais emocionantes da história para mim. 
            Ver Harry descobrir mais sobre seus pais e encontrar uma figura paterna em Sirius 
            é comovente e adiciona uma dimensão extra à sua jornada.`
          },
          {
            date: '24/04/2024',
            text: `Harry não é apenas um personagem principal; ele é um símbolo de resistência e esperança 
            para todos os que enfrentam o mal. Sua determinação em enfrentar Voldemort e proteger aqueles 
            que ama é o que o torna verdadeiramente memorável.`
          }
        ]
      },
      {
        name: 'Harry Potter',
        createdDate: '22/04/2024',
        updatedDate: '22/04/2024',
        image: null,
        physhicalDescription: 'Harry é descrito como tendo cabelos pretos desalinhados, olhos verdes e uma cicatriz em forma de raio na testa. Ele usa óculos redondos.',
        personality: `Harry é corajoso, leal e engenhoso. 
        Ele também é conhecido por seu senso de justiça e disposição para enfrentar a injustiça, 
        mesmo correndo riscos pessoais.`,
        roleStory: `Harry é o protagonista da série e desempenha um papel central na trama 
        de "Prisioneiro de Azkaban". 
        Ele descobre sobre Sirius Black, seu padrinho e suposto assassino de seus pais, 
        e busca descobrir a verdade sobre seu passado.`,
        relationships: `Harry tem relacionamentos próximos com seus amigos Rony Weasley e Hermione Granger. 
        Ele também forma um vínculo com Sirius Black e aprende mais sobre seus pais através dele.`,
        developmentArc: `Em "Prisioneiro de Azkaban", Harry experimenta um crescimento em seu entendimento 
        de seu passado e sua relação com seus pais. 
        Ele também aprende a enfrentar seus medos e dúvidas, 
        especialmente em relação à sua conexão com Sirius Black e à verdade sobre as mortes de seus pais.`,
        motivations: `A principal motivação de Harry é buscar justiça para seus pais e proteger 
        a si mesmo e aos seus entes queridos de danos. 
        Ele é impulsionado pelo desejo de descobrir a verdade e enfrentar os desafios que enfrenta.`,
        backstory: `A história pessoal de Harry inclui a morte trágica de seus pais, 
        Lily e James Potter, pelas mãos de Lord Voldemort. 
        Ele sobreviveu à Maldição da Morte, que deixou nele a cicatriz em forma de raio na testa. 
        Harry foi criado por sua tia e tio, os Dursleys, que o trataram mal.`,
        significantQuotes: [
          {
            date: '21/04/2024',
            text: `"Juro solenemente não fazer nada de bom", 
            dito por Harry ao ativar o Mapa do Maroto. 
            Essa citação reflete o lado travesso de Harry e sua disposição para burlar as regras 
            em busca de seus objetivos.`
          },
          {
            date: '21/04/2024',
            text: `"Não vale a pena viver sonhando e se esquecer de viver.". 
            Esta citação de Harry Potter ressoa com muitos leitores, 
            pois destaca a importância de viver o presente e aproveitar cada momento, 
            mesmo em meio a desafios e adversidades. É um lembrete poderoso para valorizar o aqui e agora.`
          },
          {
            date: '21/04/2024',
            text: `"As cicatrizes? Ah, sim. As cicatrizes são ótimas. Elas mostram que o passado foi real.". 
            Esta frase de Harry reflete sua jornada de autodescoberta e aceitação de seu passado. 
            Para muitos leitores, isso é reconfortante, pois mostra que nossas experiências passadas, 
            mesmo as dolorosas, nos moldam e nos tornam quem somos.`
          },
          {
            date: '21/04/2024',
            text: `"As palavras são, na minha não tão humilde opinião, nossa mais inesgotável fonte de magia, capazes de ferir e de curar.". 
            sta citação de Harry Potter ressalta o poder das palavras e da comunicação. 
            Ela inspira os leitores a refletir sobre como suas palavras podem impactar os outros, 
            tanto positiva quanto negativamente, e a importância de usá-las com sabedoria.`
          },
          {
            date: '21/04/2024',
            text: `"A felicidade pode ser encontrada mesmo nos momentos mais sombrios, se alguém se lembrar de acender a luz.". 
            Esta famosa frase de Dumbledore, compartilhada com Harry, ressalta a importância da 
            esperança e da perseverança, mesmo em tempos difíceis. 
            Para muitos leitores, isso representa uma mensagem de otimismo e 
            resiliência que ressoa profundamente.`
          }
        ],
        comments: [
          {
            date: '24/04/2024',
            text: `Harry é um personagem incrivelmente cativante. 
            Sua coragem e determinação inspiram os leitores a enfrentar seus próprios desafios. 
            Sua jornada de autodescoberta e crescimento ao longo dos livros é emocionante de acompanhar.`
          },
          {
            date: '24/04/2024',
            text: `Eu admiro a resiliência de Harry diante das adversidades. 
            Mesmo enfrentando perigos mortais e tendo um passado tão sombrio, 
            ele continua a lutar pelo que é certo. 
            Sua lealdade aos amigos e sua capacidade de perdoar são qualidades que todos podemos aprender.`
          },
          {
            date: '24/04/2024',
            text: `Harry é um herói imperfeito, e é isso que o torna tão humano e real para mim. 
            Ele comete erros, duvida de si mesmo e lida com suas próprias inseguranças, 
            mas sempre encontra uma maneira de superar. 
            Sua jornada é uma fonte de inspiração e esperança.`
          },
          {
            date: '24/04/2024',
            text: `A relação de Harry com Sirius Black é uma das partes mais emocionantes da história para mim. 
            Ver Harry descobrir mais sobre seus pais e encontrar uma figura paterna em Sirius 
            é comovente e adiciona uma dimensão extra à sua jornada.`
          },
          {
            date: '24/04/2024',
            text: `Harry não é apenas um personagem principal; ele é um símbolo de resistência e esperança 
            para todos os que enfrentam o mal. Sua determinação em enfrentar Voldemort e proteger aqueles 
            que ama é o que o torna verdadeiramente memorável.`
          }
        ]
      },
    ]
  };
  
  const [ limitView, setLimitView ] = useState(5);

  return (
    <div className='flex flex-wrap overflow-y-auto px-4 pb-4'>
      <Template
        title='Personagens'
        breadcrumbItems={[
          { text: 'Página principal', link: null },
          { text: 'Livros', link: '/bookshelf/books' },
          { text: 'Personagens', link: null }
        ]}
        // button={{
        //   id: 'newCharacter',
        //   text: 'Novo personagem',
        //   link: '#'
        // }} 
      />
      <div className='mb-8'>
        <InforBox.oneCollum
          title={`A importância de organizar os personagens para compreensão do livro: ${characters.book}`}
          textMain={characters.ExplanatoryText}
          limitHeight={true}
        />
      </div>
      {
        Array.from({ length: limitView }, (_, index) => {
          let character;

          if(index < characters.total)
            character = characters.characters[index];

          return (
            <div key={index}>
              {
                index < characters.total &&
                character &&
                  <div key={index} className='mb-6 border-b border-dotted border-slate-300 pb-6'>
                    <InforBox.characterInfor
                      backstory={character.backstory}
                      comments={character.comments}
                      createdDate={character.createdDate}
                      developmentArc={character.developmentArc}
                      image={character.image}
                      motivations={character.motivations}
                      name={character.name}
                      personality={character.personality}
                      physhicalDescription={character.physhicalDescription}
                      relationships={character.relationships}
                      roleStory={character.roleStory}
                      significantQuotes={character.significantQuotes}
                      updatedDate={character.updatedDate}
                    />
                  </div>
              }
            </div>
          );
        })
      }
      {
        limitView < characters.total &&
        <div className='mb-14 flex w-full justify-center'>
          <ButtonEst.smallRound
            id='viewMore'
            bgColor='black'
            textColor='white'
            text='Ver mais'
            type='button'
            onClick={() => setLimitView(limitView + 5)}
          />
        </div>
      }
    </div>
  );
}