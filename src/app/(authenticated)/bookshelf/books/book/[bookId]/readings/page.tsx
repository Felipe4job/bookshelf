'use client';
// A página é client side apenas para o momento de criação do layout após add o servidor de back passa a ser server side
import { ButtonEst } from '@/components/basic/buttons';
import { InforBox } from '@/components/basic/inforBox';
import { Template } from '@/components/layout/template';
import { useState } from 'react';

interface ParamsProps {
  bookId: string;
}

interface ReadingsRequestGetProps {
  uuid: string;
  book: string;
  ExplanatoryText: string;
  total: number;
  limit: number;
  readings: {
    place: 
      'Na cama antes de dormir' | 
      'Na mesa pela manhã' | 
      'Em uma cafeteria' | 
      'A tarde' | 
      'A noite' |
      'Metrô' |
      'Ônibus' |
      'Carro' |
      'Parque' |
      'Outros' 
    createdDate: string;
    updatedDate: string;
    startHour: string;
    endHour: string;
    duration: string;
    sensation: string;
    bookPages: string;
  } [];
}

export default function BookReadings ({ params }:{ params:ParamsProps }) {

  const readings: ReadingsRequestGetProps = {
    uuid: params.bookId,
    book: 'Harry Potter e o prisioneiro de Azkaban',
    ExplanatoryText: 
      `
      Incrível! Você já percorreu 80% do livro, 
      gastando um total de 32 horas e 25 minutos na leitura. 
      Sua última sessão foi em 22/04/2024. 
      É interessante ver os lugares onde você escolheu mergulhar na história: 
      70% na cama antes de dormir, 
      10% no metrô 
      e 20% na cafeteria.
      `,
    total: 11,
    limit: 5,
    readings: [
      {
        bookPages: '15 - 35',
        createdDate: '22/04/2024',
        updatedDate: '22/04/2024',
        startHour: '21:00',
        endHour: '22:35',
        duration: '1 hora e 35 min',
        place: 'Na cama antes de dormir',
        sensation: 'Bem'
      },
      {
        bookPages: '15 - 35',
        createdDate: '22/04/2024',
        updatedDate: '22/04/2024',
        startHour: '21:00',
        endHour: '22:35',
        duration: '1 hora e 35 min',
        place: 'Na cama antes de dormir',
        sensation: 'Bem'
      },
      {
        bookPages: '15 - 35',
        createdDate: '22/04/2024',
        updatedDate: '22/04/2024',
        startHour: '21:00',
        endHour: '22:35',
        duration: '1 hora e 35 min',
        place: 'Na cama antes de dormir',
        sensation: 'Bem'
      },
      {
        bookPages: '15 - 35',
        createdDate: '22/04/2024',
        updatedDate: '22/04/2024',
        startHour: '21:00',
        endHour: '22:35',
        duration: '1 hora e 35 min',
        place: 'Na cama antes de dormir',
        sensation: 'Bem'
      },
      {
        bookPages: '15 - 35',
        createdDate: '22/04/2024',
        updatedDate: '22/04/2024',
        startHour: '21:00',
        endHour: '22:35',
        duration: '1 hora e 35 min',
        place: 'Na cama antes de dormir',
        sensation: 'Bem'
      },
      {
        bookPages: '15 - 35',
        createdDate: '22/04/2024',
        updatedDate: '22/04/2024',
        startHour: '21:00',
        endHour: '22:35',
        duration: '1 hora e 35 min',
        place: 'Na cama antes de dormir',
        sensation: 'Bem'
      },
      {
        bookPages: '15 - 35',
        createdDate: '22/04/2024',
        updatedDate: '22/04/2024',
        startHour: '21:00',
        endHour: '22:35',
        duration: '1 hora e 35 min',
        place: 'Na cama antes de dormir',
        sensation: 'Bem'
      },
      {
        bookPages: '15 - 35',
        createdDate: '22/04/2024',
        updatedDate: '22/04/2024',
        startHour: '21:00',
        endHour: '22:35',
        duration: '1 hora e 35 min',
        place: 'Na cama antes de dormir',
        sensation: 'Bem'
      },
      {
        bookPages: '15 - 35',
        createdDate: '22/04/2024',
        updatedDate: '22/04/2024',
        startHour: '21:00',
        endHour: '22:35',
        duration: '1 hora e 35 min',
        place: 'Na cama antes de dormir',
        sensation: 'Bem'
      },
      {
        bookPages: '15 - 35',
        createdDate: '22/04/2024',
        updatedDate: '22/04/2024',
        startHour: '21:00',
        endHour: '22:35',
        duration: '1 hora e 35 min',
        place: 'Na cama antes de dormir',
        sensation: 'Bem'
      },
      {
        bookPages: '15 - 35',
        createdDate: '22/04/2024',
        updatedDate: '22/04/2024',
        startHour: '21:00',
        endHour: '22:35',
        duration: '1 hora e 35 min',
        place: 'Na cama antes de dormir',
        sensation: 'Bem'
      }
      
    ]
  };
  
  const [ limitView, setLimitView ] = useState(5);

  return (
    <div className='flex flex-wrap overflow-y-auto px-4 pb-4'>
      <Template
        title='Leituras'
        breadcrumbItems={[
          { text: 'Página principal', link: null },
          { text: 'Livros', link: '/bookshelf/books' },
          { text: 'Leituras', link: null }
        ]}
        button={{
          id: 'newReading2',
          text: 'Nova leitura',
          link: '#'
        }} 
      />
      <div className='mb-8'>
        <InforBox.oneCollum
          title={`Um pouco de como anda sua leitura: ${readings.book}`}
          textMain={readings.ExplanatoryText} 
        />
      </div>
      {/* {
        Array.from({ length: limitView }, (_, index) => {
          return (
            <div key={index}>
              {
                index < readings.total &&
                  <div key={index} className='mb-6 border-b border-dotted border-slate-300 pb-6'>
                    <h3 className='mb-2'>Comentário referente a(s) páginas {readings.readings[index].bookPages}</h3>
                    <p>Criado em {readings.readings[index].createdDate}</p>
                    <p className='mb-2'>Última atualização em {readings.readings[index].updatedDate}</p>
                    <BoxEditText
                      text={readings.readings[index].text}
                      editFunction={()=>{}} 
                    />
                  </div>
              }
            </div>
          );
        })
      } */}
      {
        limitView < readings.total &&
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