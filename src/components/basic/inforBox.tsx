import { BookRequestGetProps } from '@/app/(authenticated)/bookshelf/books/page';
import Image from 'next/image';
import { LinkEst } from './link';

interface InforBoxProps {
  image?: string;
  title: string;
  textMain: React.ReactNode;
  textSecondary?: React.ReactNode; 
}

export const InforBox = {
  default: (props: InforBoxProps) => {
    return (
      <div className='flex w-full rounded-lg border border-grayLight bg-secondaryExLight py-4'>
        <div className='flex basis-1/2 justify-center'>
          {
            props.image ?
              <Image
                alt={`image-book`}
                src={props.image}
                height={224}
                width={160} 
              />
              :
              <div className='px-4'>
                {props.textSecondary}
              </div>
          }
        </div>
        <div className='flex basis-1/2 flex-col pr-4'>
          <h3 className='mb-2'>{props.title}</h3>
          {props.textMain}
        </div>
      </div>
    );
  },
  bookInfor: (book: BookRequestGetProps) => {
    return (
      <div className='flex w-full flex-col rounded-lg border border-grayLight bg-secondaryExLight py-4'>
        <div className='flex'>
          <div className='flex basis-1/2 justify-center'>
            {
              book.cover_edition ?
                <Image
                  alt='Book Cover'
                  src={book.cover_edition}
                  height={224}
                  width={160}
                />
                :
                <div className='flex h-[224px] w-[160px] flex-col border border-secondaryLight p-4'>
                  <div className='basis-4/5'>{book.title}</div>
                  <div>{book.author_name}</div>
                </div>
            }
          </div>
          <div className='flex basis-1/2 flex-col pr-4'>
            <h3 className='mb-2'>{book.title}</h3>
            {/* Tem q formatar o H3 */}
            <ol>
              <li><span className='font-semibold'>Autor(a):</span> {book.author_name}</li>
              <li><span className='font-semibold'>Idioma:</span> {book.language}</li>
              <li><span className='font-semibold'>ISBN:</span> {book.isbn.join(', ')}</li>
              <li><span className='font-semibold'>Publicação:</span> {book.first_publish_year}</li>
              <li><span className='font-semibold'>Editora:</span> {book.publisher.join(', ')}</li>
            </ol>
          </div>
        </div>
        <div className='w-full p-4'>
          <ol>
            <li><span className='font-semibold'>Total de páginas:</span> {book.total_pages}</li>
            <li><span className='font-semibold'>Evolução:</span> {book.evolution}</li>
            <li>
              <span className='font-semibold'>Última leitura: </span> 
              {
                book.last_reading ?
                  <>
                    {book.last_reading}
                    <LinkEst href='#' className='ml-4 font-semibold text-secondaryDark'>
                      Ver todas
                    </LinkEst>
                  </>
                  :
                  <>
                    Você ainda não registrou uma leitura.
                    <LinkEst href='#' className='ml-4 font-semibold text-secondaryDark'>
                      Registrar leitura
                    </LinkEst>                  
                  </>
              }              
            </li>
            <li>
              <span className='font-semibold'>Última resenha: </span> 
              {
                book.last_review ?
                  <>
                    {book.last_review}
                    <LinkEst href='#' className='ml-4 font-semibold text-secondaryDark'>
                      Ver todas
                    </LinkEst>
                  </>
                  :
                  <>
                    Você ainda não registrou uma leitura.
                    <LinkEst href='#' className='ml-4 font-semibold text-secondaryDark'>
                      Registrar resenha
                    </LinkEst>                  
                  </>
              }              
            </li>
            <li>
              <span className='font-semibold'>Sua descrição: </span> 
              {
                book.your_description ?
                  <>
                    {book.your_description}
                    <LinkEst href='#' className='ml-4 font-semibold text-secondaryDark'>
                      Ver descrição
                    </LinkEst>
                  </>
                  :
                  <>
                    Você ainda não registrou uma leitura.
                    <LinkEst href='#' className='ml-4 font-semibold text-secondaryDark'>
                      Criar descrição
                    </LinkEst>                  
                  </>
              }              
            </li>
            {/* Verificar como limitar a quantidade de caracteres */}
          </ol>
        </div>
      </div>
    );
  }
};