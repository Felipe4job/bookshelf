import { InforBox } from '@/components/basic/inforBox';
import { Template } from '@/components/layout/template';

export interface BookRequestGetProps {
  title: string;
  uuid: string;
  edition_key: string[];
  isbn: string[];
  cover_edition: string | null;
  language: string;
  author_name: string[];
  your_description: string | null;
  last_reading: string | null;
  current_page: number;
  last_review: string | null;
  first_publish_year: number;
  publisher: string[];
  total_pages: number;
  evolution: string;  
}

export default function Books () {
  const books: BookRequestGetProps[] = [
    {
      title: 'Harry Potter e o prisioneiro de Azkaban',
      uuid: '550e8400-e29b-41d4-a716-446655440000',
      edition_key: [ 'OL49950319M' ],
      isbn: [ 'OL49950319M' ],
      author_name: [ 'J.R.R. Tolkien' ],
      your_description: null,
      current_page: 0,
      language: 'por',
      last_reading: null,
      last_review: null,
      cover_edition: '/images/OL49950319M-L.jpg',
      first_publish_year: 2019,
      publisher: [ 'HarperCollins' ],
      total_pages: 538,
      evolution: '0 %'
    },
    {
      title: 'Scrum Guidebook',
      uuid: '550e8400-e29b-41d4-a716-446655440000',
      edition_key: [ 'OL49950319M' ],
      isbn: [ 'OL49950319M' ],
      author_name: [ 'J.R.R. Tolkien' ],
      your_description: `is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
      It has survived not only five centuries, but also the leap into electronic typesetting, 
      remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
      sheets containing Lorem Ipsum passages, 
      and more recently with desktop publishing software like Aldus PageMaker including 
      versions of Lorem Ipsum.`,
      current_page: 583,
      language: 'por',
      last_reading: null,
      last_review: null,
      cover_edition: '/images/0013835006-L.jpg',
      first_publish_year: 2019,
      publisher: [ 'HarperCollins' ],
      total_pages: 538,
      evolution: '0 %'
    },
    {
      title: 'Os Arteiros Mágicos',
      uuid: '550e8400-e29b-41d4-a716-446655440000',
      edition_key: [ 'OL49950319M' ],
      isbn: [ 'OL49950319M' ],
      author_name: [ 'J.R.R. Tolkien' ],
      your_description: null,
      current_page: 0,
      language: 'por',
      last_reading: null,
      last_review: null,
      cover_edition: '/images/0012370984-L.jpg',
      first_publish_year: 2019,
      publisher: [ 'HarperCollins' ],
      total_pages: 538,
      evolution: '0 %'
    },
    {
      title: 'The memoirs of Sherlock Holmes',
      uuid: '550e8400-e29b-41d4-a716-446655440000',
      edition_key: [ 'OL49950319M' ],
      isbn: [ 'OL49950319M' ],
      author_name: [ 'J.R.R. Tolkien' ],
      your_description: null,
      current_page: 0,
      language: 'por',
      last_reading: null,
      last_review: null,
      cover_edition: '/images/0013379312-L.jpg',
      first_publish_year: 2019,
      publisher: [ 'HarperCollins' ],
      total_pages: 538,
      evolution: '0 %'
    },
    {
      title: 'Sherlock Holmes, um estudo em vermelho.',
      uuid: '550e8400-e29b-41d4-a716-446655440000',
      edition_key: [ 'OL49950319M' ],
      isbn: [ 'OL49950319M' ],
      author_name: [ 'J.R.R. Tolkien' ],
      your_description: null,
      current_page: 0,
      language: 'por',
      last_reading: '16/04/2024 pág(s): 0 - 52',
      last_review: null,
      cover_edition: '/images/0012372621-L.jpg',
      first_publish_year: 2019,
      publisher: [ 'HarperCollins' ],
      total_pages: 538,
      evolution: '9,66 %'
    },
    {
      title: 'Davi, o homem segundo o coração de Deus',
      uuid: '550e8400-e29b-41d4-a716-446655440000',
      edition_key: [ 'OL49950319M' ],
      isbn: [ 'OL49950319M', 'OL49950319M' ],
      author_name: [ 'J.R.R. Tolkien' ],
      your_description: null,
      current_page: 0,
      language: 'por',
      last_reading: null,
      last_review: null,
      cover_edition: null,
      first_publish_year: 2019,
      publisher: [ 'HarperCollins' ],
      total_pages: 538,
      evolution: '0 %'
    }
  ];

  return (
    <div className='flex flex-wrap overflow-y-auto px-4 pb-4'>
      <Template
        title='Livros'
        breadcrumbItems={ 
          [ 
            { text: 'Página principal', link: null },
            { text: 'Livros', link: null } 
          ] 
        }
        button={{
          id: 'newBook',
          text: 'Novo livro',
          link: ''
        }}
      /> 
      <div className='flex w-full flex-wrap'>
        {
          Array.from({ length: books.length }, (_, index)=>{
            const book = books[index];
            return (
              <div key={index} className='mb-4 w-[430px]'>
                <InforBox.bookInfor
                  author_name={book.author_name}
                  uuid={book.uuid}
                  cover_edition={book.cover_edition}
                  current_page={book.current_page}
                  edition_key={book.edition_key}
                  evolution={book.evolution}
                  first_publish_year={book.first_publish_year}
                  isbn={book.isbn}
                  language={book.language}
                  last_reading={book.last_reading}
                  last_review={book.last_review}
                  publisher={book.publisher}
                  title={book.title}
                  total_pages={book.total_pages}
                  your_description={book.your_description} 
                />
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

