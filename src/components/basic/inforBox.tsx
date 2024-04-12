import Image from 'next/image';

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
        <div className='basis-1/2 pr-4'>
          <h3 className='mb-2'>{props.title}</h3>
          {props.textMain}
        </div>
      </div>
    );
  }
};