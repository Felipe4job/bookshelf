'use client';

import { useState } from 'react';
import { ButtonEst } from './buttons';

interface BoxEditTextProps {
  text: React.ReactNode;
  editFunction: ()=> void;
}

export const BoxEditText = (props: BoxEditTextProps) => {
  const [ editing, setEditing ] = useState(false);
  const handleSaveText = ()=>{
    setEditing(false);
    props.editFunction();
  };

  return (
    <div className='flex w-full flex-col space-y-4 rounded-lg border border-grayLight p-4'>
      <div>{props.text}</div>
      <div className='flex flex-row-reverse'>
        <ButtonEst.smallRound 
          id='edit-save-description'
          textColor='white'
          bgColor='#90caf9'
          type='button'
          text={!editing ? 'Editar' : 'Salvar'}
          onClick={!editing ? () => setEditing(true) : () => handleSaveText()}
        />
      </div>
    </div>
  );
};