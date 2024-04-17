import { Breadcrumb } from '../basic/breadcrumb';
import { ButtonEst } from '../basic/buttons';

export interface TemplateProps {
  title: string;
  breadcrumbItems?: {
    text: 
      'Página principal' |
      'livros' |
      'Desejos' |
      'Sua Descrição' |
      'Resenhas' |
      'Personagens' |
      'Leituras' |
      'Perfil',
    link: string | null
  }[],
  button?: {
    text: string,
    link: string,
    id: string
  }
}

export const Template = (props: TemplateProps) => {
  return (
    <>
      <div className='mb-4 w-full' >
        <h1>{props.title}</h1>
        {
          props.breadcrumbItems &&
          props.breadcrumbItems.length > 0 &&
          <Breadcrumb.Root>
            {
              Array.from({ length: props.breadcrumbItems.length }, (_, index) => {

                const handleBreadcrumb = () => {
                  if(props.breadcrumbItems) {
                    const item = props.breadcrumbItems[index];
                    if(item.text === 'Página principal')
                      return <Breadcrumb.Link text='Página principal' link='/bookshelf'/>;
                    else if(item.link)
                      return <Breadcrumb.Link text={item.text} link={item.link} />;
                    else return <Breadcrumb.Now text={item.text} />;
                  }
                };
                
                return (
                  <>
                    {
                      handleBreadcrumb()
                    }
                  </>
                );
              })
            }
          </Breadcrumb.Root>
        }
      </div>
      {
        props.button &&
        <div className='absolute bottom-4 end-4 z-50'>
          <ButtonEst.smallRound
            id={props.button.id}
            text={props.button.text}
            textColor='white'
            bgColor='#90caf9'
            type='button'
          />
        </div>
      }      
    </>
  );
};