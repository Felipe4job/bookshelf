'use client';
import { MdEditSquare } from 'react-icons/md';

interface InforBoxPropsOneCollum {
  title?: string;
  textMain: React.ReactNode;
  bgColor?: string;
  textColor?: string;
  limitHeight?: boolean;
  edit?: boolean;  
}

export const OneCollum = (props: InforBoxPropsOneCollum) => {
  return (
    <div 
      className={`relative flex ${props.limitHeight ? 'h-40' : 'h-[auto]'} w-full flex-col overflow-y-auto rounded-lg border border-grayLight p-4`}
      style={{ 
        backgroundColor: `${props.bgColor ?? '#e3f2fd'}`,
        color: `${props.textColor ?? 'black'}`  
      }}
    >
      {
        props.title &&
        <h3 className='mb-2'>{props.title}</h3>
      }
      {props.textMain}
      {
        props.edit &&
        <div className='absolute right-4 top-4'>
          <MdEditSquare size={16} className='text-greenDark' onClick={()=>{}} />
        </div>
      }
    </div>
  );
};