'use client';
// A página é client side apenas para o momento de criação do layout após add o servidor de back passa a ser server side
import { ButtonEst } from '@/components/basic/buttons';
import { InforBox } from '@/components/basic/inforBox';
import { Template } from '@/components/layout/template';
import { useState } from 'react';

interface ParamsProps {
  bookId: string;
}

export interface ReadingsRequestGetProps {
  uuid: string;
  book: string;
  ExplanatoryText: string;
  total: number;
  limit: number;
  readings:ReadingRequestResProps[];
}

export interface ReadingRequestResProps {
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
  readingDate: string;
  updatedDate: string;
  startHour: string;
  endHour: string;
  duration: string;
  sensation: string;
  bookPages: string;
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
        readingDate: '22/04/2024',
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
        readingDate: '22/04/2024',
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
        readingDate: '22/04/2024',
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
        readingDate: '22/04/2024',
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
        readingDate: '22/04/2024',
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
        readingDate: '22/04/2024',
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
        readingDate: '22/04/2024',
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
        readingDate: '22/04/2024',
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
        readingDate: '22/04/2024',
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
        readingDate: '22/04/2024',
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
        readingDate: '22/04/2024',
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
        // button={{
        //   id: 'newReading2',
        //   text: 'Nova leitura',
        //   link: '#'
        // }} 
      />
      <div className='mb-8'>
        <InforBox.oneCollum
          title={`Um pouco de como anda sua leitura: ${readings.book}`}
          textMain={readings.ExplanatoryText}
          limitHeight={true} 
        />
      </div>
      {
        Array.from({ length: limitView }, (_, index) => {
          const reading = readings.readings[index];
          let boxText: React.ReactNode = <></>;

          if(index < readings.total)
            boxText = 
              <ol>
                <li><span style={{ fontWeight: 'bold' }}>Data de criação: </span>{reading.createdDate}</li>
                <li><span style={{ fontWeight: 'bold' }}>Última atualização: </span>{reading.updatedDate}</li>
                <li><span style={{ fontWeight: 'bold' }}>Páginas lidas: </span>{reading.bookPages}</li>
                <li><span style={{ fontWeight: 'bold' }}>Data da leitura: </span>{reading.readingDate}</li>
                <li><span style={{ fontWeight: 'bold' }}>Hora de início: </span>{reading.startHour}</li>
                <li><span style={{ fontWeight: 'bold' }}>Hora final: </span>{reading.endHour}</li>
                <li><span style={{ fontWeight: 'bold' }}>Duração total: </span>{reading.duration}</li>
                <li><span style={{ fontWeight: 'bold' }}>Local de leitura: </span>{reading.place}</li>
                <li><span style={{ fontWeight: 'bold' }}>Sensação após leitura: </span>{reading.sensation}</li>
              </ol>; 
          return (
            <div key={index} className='w-[430px]'>
              {
                index < readings.total &&
                  <div key={index} className='mb-6 border-b border-dotted border-slate-300 pb-6'>
                    <InforBox.oneCollum
                      textMain={boxText}
                      bgColor='white'
                      edit={true}
                    />
                  </div>
              }
            </div>
          );
        })
      }
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