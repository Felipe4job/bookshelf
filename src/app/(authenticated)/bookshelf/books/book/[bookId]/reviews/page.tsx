'use client';
// A página é client side apenas para o momento de criação do layout após add o servidor de back passa a ser server side
import { BoxEditText } from '@/components/basic/boxEditText';
import { ButtonEst } from '@/components/basic/buttons';
import { InforBox } from '@/components/basic/inforBox';
import { Template } from '@/components/layout/template';
import { useState } from 'react';

interface ParamsProps {
  bookId: string;
}

interface ReviewsRequestGetProps {
  uuid: string;
  book: string;
  ExplanatoryText: string;
  total: number;
  limit: number;
  reviews: {
    text: string;
    createdDate: string;
    updatedDate: string;
    bookPages: string | null;
  } [];
}

export default function BookReviews ({ params }:{ params:ParamsProps }) {

  const reviews: ReviewsRequestGetProps = {
    uuid: params.bookId,
    book: 'Harry Potter e o prisioneiro de Azkaban',
    ExplanatoryText:
    `
    Para escrever uma resenha concisa, 
    comece destacando a essência da parte do livro que deseja abordar. 
    Apresente a página inicial e final dessa seção, 
    dando uma breve visão geral do que acontece. 
    Em seguida, concentre-se nos principais pontos: personagens, temas e impacto emocional. 
    Lembre-se de manter a resenha dentro do limite de 600 caracteres. 
    Após concluir o livro, reúna todas as partes da resenha para criar uma análise completa. 
    E, claro, você sempre pode editar e aprimorar sua resenha conforme necessário.
    `,
    total: 11,
    limit: 5,
    reviews: [
      {
        text: 
          `
          Mussum Ipsum, cacilds vidis litro abertis.  
          Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. 
          Delegadis gente finis, bibendum egestas augue arcu ut est. 
          Quem num gosta di mim que vai caçá sua turmis! Quem num gosta di mé, boa gentis num é.
          `,
        bookPages: '15 - 35',
        createdDate: '22/04/2024',
        updatedDate: '22/04/2024'
      },
      {
        text: 
          `
          Mussum Ipsum, cacilds vidis litro abertis.  
          Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. 
          Delegadis gente finis, bibendum egestas augue arcu ut est. 
          Quem num gosta di mim que vai caçá sua turmis! Quem num gosta di mé, boa gentis num é.
          `,
        bookPages: '15 - 35',
        createdDate: '22/04/2024',
        updatedDate: '22/04/2024'
      },
      {
        text: 
          `
          Mussum Ipsum, cacilds vidis litro abertis.  
          Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. 
          Delegadis gente finis, bibendum egestas augue arcu ut est. 
          Quem num gosta di mim que vai caçá sua turmis! Quem num gosta di mé, boa gentis num é.
          `,
        bookPages: '15 - 35',
        createdDate: '22/04/2024',
        updatedDate: '22/04/2024'
      },
      {
        text: 
          `
          Mussum Ipsum, cacilds vidis litro abertis.  
          Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. 
          Delegadis gente finis, bibendum egestas augue arcu ut est. 
          Quem num gosta di mim que vai caçá sua turmis! Quem num gosta di mé, boa gentis num é.
          `,
        bookPages: '15 - 35',
        createdDate: '22/04/2024',
        updatedDate: '22/04/2024'
      },
      {
        text: 
          `
          Mussum Ipsum, cacilds vidis litro abertis.  
          Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. 
          Delegadis gente finis, bibendum egestas augue arcu ut est. 
          Quem num gosta di mim que vai caçá sua turmis! Quem num gosta di mé, boa gentis num é.
          `,
        bookPages: '15 - 35',
        createdDate: '22/04/2024',
        updatedDate: '22/04/2024'
      },
      {
        text: 
          `
          Mussum Ipsum, cacilds vidis litro abertis.  
          Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. 
          Delegadis gente finis, bibendum egestas augue arcu ut est. 
          Quem num gosta di mim que vai caçá sua turmis! Quem num gosta di mé, boa gentis num é.
          `,
        bookPages: '15 - 35',
        createdDate: '22/04/2024',
        updatedDate: '22/04/2024'
      },
      {
        text: 
          `
          Mussum Ipsum, cacilds vidis litro abertis.  
          Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. 
          Delegadis gente finis, bibendum egestas augue arcu ut est. 
          Quem num gosta di mim que vai caçá sua turmis! Quem num gosta di mé, boa gentis num é.
          `,
        bookPages: '15 - 35',
        createdDate: '22/04/2024',
        updatedDate: '22/04/2024'
      },
      {
        text: 
          `
          Mussum Ipsum, cacilds vidis litro abertis.  
          Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. 
          Delegadis gente finis, bibendum egestas augue arcu ut est. 
          Quem num gosta di mim que vai caçá sua turmis! Quem num gosta di mé, boa gentis num é.
          `,
        bookPages: '15 - 35',
        createdDate: '22/04/2024',
        updatedDate: '22/04/2024'
      },
      {
        text: 
          `
          Mussum Ipsum, cacilds vidis litro abertis.  
          Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. 
          Delegadis gente finis, bibendum egestas augue arcu ut est. 
          Quem num gosta di mim que vai caçá sua turmis! Quem num gosta di mé, boa gentis num é.
          `,
        bookPages: '15 - 35',
        createdDate: '22/04/2024',
        updatedDate: '22/04/2024'
      },
      {
        text: 
          `
          Mussum Ipsum, cacilds vidis litro abertis.  
          Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. 
          Delegadis gente finis, bibendum egestas augue arcu ut est. 
          Quem num gosta di mim que vai caçá sua turmis! Quem num gosta di mé, boa gentis num é.
          `,
        bookPages: '15 - 35',
        createdDate: '22/04/2024',
        updatedDate: '22/04/2024'
      },
      {
        text: 
          `
          Mussum Ipsum, cacilds vidis litro abertis.  
          Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. 
          Delegadis gente finis, bibendum egestas augue arcu ut est. 
          Quem num gosta di mim que vai caçá sua turmis! Quem num gosta di mé, boa gentis num é.
          `,
        bookPages: '15 - 35',
        createdDate: '22/04/2024',
        updatedDate: '22/04/2024'
      }
    ]
  };
  
  const [ limitView, setLimitView ] = useState(5);

  return (
    <div className='flex flex-wrap overflow-y-auto px-4 pb-4'>
      <Template
        title='Resenhas e comentários'
        breadcrumbItems={[
          { text: 'Página principal', link: null },
          { text: 'Livros', link: '/bookshelf/books' },
          { text: 'Resenhas', link: null }
        ]}
        // button={{
        //   id: 'newReview',
        //   text: 'Nova resenha',
        //   link: '#'
        // }} 
      />
      <div className='mb-8'>
        <InforBox.oneCollum
          title={`Dica de como contruir sua resenha: ${reviews.book}`}
          textMain={reviews.ExplanatoryText}
          limitHeight={true}
        />
      </div>
      {
        Array.from({ length: limitView }, (_, index) => {
          return (
            <div key={index}>
              {
                index < reviews.total &&
                  <div key={index} className='mb-6 border-b border-dotted border-slate-300 pb-6'>
                    <h3 className='mb-2'>Comentário referente a(s) páginas {reviews.reviews[index].bookPages}</h3>
                    <p>Criado em {reviews.reviews[index].createdDate}</p>
                    <p className='mb-2'>Última atualização em {reviews.reviews[index].updatedDate}</p>
                    <BoxEditText
                      text={reviews.reviews[index].text}
                      editFunction={()=>{}} 
                    />
                  </div>
              }
            </div>
          );
        })
      }
      {
        limitView < reviews.total &&
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