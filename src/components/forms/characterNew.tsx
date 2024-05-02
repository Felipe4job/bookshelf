'use client';

import { useForm } from 'react-hook-form';
import { InputEst } from '../basic/inputs';
import { ButtonEst } from '../basic/buttons';
import { useState } from 'react';

export const CharacterNew = () => {

  const { handleSubmit, register, formState: { errors }, setError } = useForm();

  const [ file, setFile ] = useState<FileList>();
  const [ imagePreview, setImagePreview ] = useState<any>();

  const onSubmit = (data: any) => {
    console.log('submeteu', data);
  };

  const handleFileChange = (e: any) => {

    const fileUploaded = e.target ? e.target.files[0] : e.dataTransfer.files[0];
    setFile(undefined);

    if(fileUploaded) {
      if([ 'image/png', 'image/jpeg' ].includes(fileUploaded.type)) {
        if(fileUploaded.size < 10000000) {
          setFile(fileUploaded);

          const reader = new FileReader();
          reader.onload = () => {
            setImagePreview(reader.result);
          };
          reader.readAsDataURL(fileUploaded);
        }else{
          setError('projectLogo', {
            type: 'manual',
            message: 'O arquivo não pode ultrpassar 2mb.'
          });
        }
      }else{
        setError('projectLogo', {
          type: 'manual',
          message: 'O arquivo deve ser do tipo JPEG ou PNG.'
        });
      }
    }
  };

  return (
    <form onSubmit={ handleSubmit(onSubmit) } >
      <InputEst.file
        name='characterImage'
        handleFileChange={handleFileChange}
        file={file}
        imagePreview={imagePreview}
        rules={{
          required: 'O campo nome é obrigatório.'
        }}
        register={ register }
        errors={ errors }
      />
      <InputEst.textOrEmail
        id='characterName'
        name='characterName'
        title='Nome do personagem'
        placeholder='Nome do personagem'
        type='text'
        style={{ fontSize: 'var(--text-base)' }}
        rules={{
          required: 'O campo nome é obrigatório.'
        }}
        register={ register }
        errors={ errors } 
      />
      <InputEst.textArea
        id='characterPhyshicalDescription'
        name='physhicalDescription'
        title='Descrição física do personagem'
        placeholder='Descrição física do personagem'
        rules={{}}
        register={ register }
        errors={ errors }
      />
      <div className='flex flex-row-reverse'>
        <ButtonEst.smallRound
          id='saveNewReading'
          text='Enviar'
          type='submit'
          bgColor='var(--secondaryExDark)'
          textColor='white'
        />
      </div>
    </form>
  );
};