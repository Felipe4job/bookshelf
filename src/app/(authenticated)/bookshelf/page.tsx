import { ButtonEst } from '@/components/basic/buttons';
import { Carousel, CarouselProps, CarouselReminder, CarouselReminderProps } from '@/components/basic/carousel';
import { InforBox } from '@/components/basic/inforBox';
import { LinkEst } from '@/components/basic/link';

export default function Bookshelf () {
  const books: CarouselProps = {
    items: [
      {
        title: 'Harry Potter e o prisioneiro de Azkaban',
        evolution: 50,
        image: '/images/OL49950319M-L.jpg'
      },
      {
        title: 'Scrum Guidebook',
        evolution: 0,
        image: '/images/0013835006-L.jpg'
      },
      {
        title: 'Os Arteiros Mágicos',
        evolution: 90,
        image: '/images/0012370984-L.jpg'
      },
      {
        title: 'The memoirs of Sherlock Holmes',
        evolution: 0,
        image: '/images/0013379312-L.jpg'
      },
      {
        title: 'Sherlock Holmes, um estudo em vermelho.',
        evolution: 100,
        image: '/images/0012372621-L.jpg'
      },
      {
        title: 'Davi, o homem segundo o coração de Deus',
        evolution: 100
      }
    ]
  };

  const reminders: CarouselReminderProps = {
    items: [
      {
        id: 'Aqui vai um UUID',
        text: 'Já faz muito tempo que você não registra uma leitura.',
        date: '31/12/2024'
      },
      {
        id: 'Aqui vai um UUID',
        text: 'Você pediu pra avisar que: Eu preciso reler a página 598 do livro Êxodo',
        date: '31/12/2024'
      },
      {
        id: 'Aqui vai um UUID',
        text: 'Hoje é o dia mundial da leitura. Que tal maratonar o seu livro preferido? Ou reler suas resenhas?',
        date: '31/12/2024'
      }
    ]
  };

  return (
    <main className='ml-4 flex flex-wrap overflow-y-auto pb-4'>
      <div className='mb-4 w-full' >
        <h1>Página principal</h1>
        {/* <Breadcrumb.Root>
          <Breadcrumb.Link text='Página principal' link='#'/>
          <Breadcrumb.Now text='Só o teste' /> 
        </Breadcrumb.Root> */}
      </div>
      {/* Bloco dos meus livros e desejos */}
      <div className='mb-8 flex w-[430px] flex-col items-center'>
        <h2>Meus livros</h2>
        <LinkEst href='#' className='mb-2 text-secondaryDark'>Lista de livros</LinkEst>
        <Carousel items={books.items} />        
      </div>
      <div className='mb-8 flex w-[430px] flex-col items-center'>
        <h2>Livros desejados</h2>
        <LinkEst href='#' className='mb-2 text-secondaryDark'>Lista de desejos</LinkEst>
        <Carousel items={books.items} />        
      </div>
      {/* Bloco da última leitura e de lembretes */}
      <div className='mb-8 w-[430px]'>
        <InforBox.default
          title='Última leitura'
          textMain={<p>Isso é um teste se eu enviar um texto com <strong>Formatação HTML</strong></p>}
          image='/images/0012370984-L.jpg'
        />
      </div>
      <div className='mb-12 flex w-[430px] flex-col items-center'>
        <h2>Lembretes</h2>
        <LinkEst href='#' className='mb-2 text-secondaryDark'>Página de lembretes</LinkEst>
        <CarouselReminder items={reminders.items} />
      </div>
      <div className='absolute bottom-4 end-4'>
        <ButtonEst.smallRound
          id='newReading'
          text='Registrar leitura'
          textColor='white'
          bgColor='#90caf9'
          type='button'
        />
      </div>   
    </main>
  );
}