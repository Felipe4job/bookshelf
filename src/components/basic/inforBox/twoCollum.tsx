import Image from 'next/image';

interface InforBoxPropsTwoCollumns {
  image?: string;
  textImage: string;
  title: string;
  author: string;
  textMain: React.ReactNode;
}

export const TwoCollumns = (props: InforBoxPropsTwoCollumns) => {
  return (
    <div className='flex w-full rounded-lg border border-grayLight bg-secondaryExLight py-4'>
      <div className='flex basis-1/2 justify-center'>
        {
          props.image ?
            <Image
              alt={props.textImage}
              src={props.image}
              height={224}
              width={160} 
            />
            :
            <div className='flex h-[224px] w-[160px] flex-col border border-secondaryLight p-4'>
              <div className='basis-4/5'>{props.title}</div>
              <div>{props.author}</div>
            </div>
        }
      </div>
      <div className='flex basis-1/2 flex-col pr-4'>
        <h3 className='mb-2'>{props.title}</h3>
        {props.textMain}
      </div>
    </div>
  );
};