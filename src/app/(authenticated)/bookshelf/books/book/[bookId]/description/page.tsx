import { BoxEditText } from '@/components/basic/boxEditText';
import { InforBox } from '@/components/basic/inforBox';
import { Template } from '@/components/layout/template';

interface ParamsProps {
  bookId: string;
}

interface DescriptionRequestGetProps {
  uuid: string;
  title: string;
  description: string | null;
  ExplanatoryText: string;
}

export default function BookDescription ({ params }:{ params:ParamsProps }) {

  const book: DescriptionRequestGetProps = {
    uuid: params.bookId,
    title: 'Harry Potter e o prisioneiro de Azkaban',
    description: 
    `
    Mussum Ipsum, cacilds vidis litro abertis.  
    Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. 
    Delegadis gente finis, bibendum egestas augue arcu ut est. 
    Quem num gosta di mim que vai caçá sua turmis! Quem num gosta di mé, boa gentis num é.

    Suco de cevadiss deixa as pessoas mais interessantis. 
    Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. 
    Pellentesque nec nulla ligula. Donec gravida turpis a vulputate ultricies. 
    Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum.
    
    Quem num gosta di mé, boa gentis num é. 
    Morbi viverra placerat justo, vel pharetra turpis. 
    A ordem dos tratores não altera o pão duris. 
    Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis!
    `,
    ExplanatoryText:
    `
    Para criar uma descrição envolvente de um livro, 
    comece identificando o gênero e tema, 
    destacando brevemente a premissa e os personagens principais. 
    Descreva o estilo de escrita e o ambiente da história para estabelecer a atmosfera. 
    Destaque os pontos fortes percebidos até o momento, 
    sem revelar spoilers, 
    e compartilhe suas expectativas e primeiras impressões sobre o desenvolvimento da trama. 
    Evite revelar grandes reviravoltas 
    e foque em transmitir as sensações e emoções que o livro desperta. 
    O melhor momento para iniciar essa descrição 
    pode variar de acordo com a preferência individual, podendo ser antes, 
    durante ou ao final da leitura, 
    dependendo de quando você sentir que tem uma compreensão suficiente da obra 
    para transmitir suas impressões de forma precisa e intrigante. 
    Lembre-se de que você pode editar o texto a qualquer momento para refletir 
    melhor suas percepções à medida que avança na leitura.
    `
  };
  const descriptionText = `
  Em 'Harry Potter e o Prisioneiro de Azkaban', 
  terceiro livro da icônica série de J.K. Rowling, 
  somos levados de volta ao mundo mágico de Hogwarts para mais uma aventura emocionante. 
  Enquanto Harry Potter retorna à escola de bruxaria para seu terceiro ano, 
  ele descobre que Sirius Black, um perigoso prisioneiro de Azkaban, escapou e está à solta, 
  aparentemente determinado a encontrá-lo. 
  Enquanto isso, segredos sombrios do passado de Harry vêm à tona, 
  e ele se vê confrontando não apenas seus próprios demônios, 
  mas também os mistérios envolvendo sua família. 
  Com uma narrativa repleta de magia, 
  suspense e reviravoltas inesperadas, 
  este livro mergulha os leitores em um mundo de criaturas mágicas, 
  amizade e coragem. À medida que Harry e seus amigos enfrentam os desafios que se apresentam, 
  eles descobrem que nem tudo é o que parece neste mundo repleto de magia e mistério. 
  'Harry Potter e o Prisioneiro de Azkaban' 
  é uma leitura emocionante que cativa leitores de todas as idades, 
  deixando-os ansiosos para descobrir o que o destino reserva para o jovem bruxo e seus amigos.`;

  return (
    <div className='flex flex-wrap overflow-y-auto px-4 pb-4'>
      <Template
        title='Descrição do livro'
        breadcrumbItems={[
          { text: 'Página principal', link: null },
          { text: 'Livros', link: '/bookshelf/books' },
          { text: 'Sua Descrição', link: null }
        ]} 
      />
      <div className='mb-8'>
        <InforBox.oneCollum
          title={`Uma dica para construir a sua descrição do livro: ${book.title}`}
          textMain={book.ExplanatoryText} 
        />
      </div>
      <div className='mb-4'>
        <BoxEditText
          text={descriptionText}
          editFunction={
            async ()=> {
              'use server';
            }}
        />
      </div>
    </div>
  );
}