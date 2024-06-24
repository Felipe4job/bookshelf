'use client';

import { ErrorMessage } from '@hookform/error-message';
import Image from 'next/image';
import { FieldErrorsImpl } from 'react-hook-form';
import { FaCloudUploadAlt } from 'react-icons/fa';

interface FileTypeProps {
  handleFileChange: (e: any) => void;
  file: FileList | undefined;
  imagePreview: any | undefined;
  register: any;
  errors: FieldErrorsImpl;
  rules: object;
  name: string;
}

export const FileType = (props: FileTypeProps) => {

  const handleDragOver = (e: React.DragEvent<HTMLInputElement>) => {
    e.preventDefault();
  };

  // const [ file, setFile ] = useState<FileList | undefined>(undefined);
  // const [ imagePreview, setImagePreview ]  = useState<any | undefined>(undefined);

  // useEffect(() => {
  //   setFile(props.file);
  //   setImagePreview(props.imagePreview);
  //   console.log(props.file, props.imagePreview);

  // }, [ props.file, props.imagePreview ]);

  return (
    <>

      <div
        className='mb-4 flex h-[224px] w-[160px] flex-col justify-center justify-items-center border border-secondary'
        onDragOver={handleDragOver}
        onDrop={props.handleFileChange}
      >
        <input
          id='fileInput'
          type='file'
          onChangeCapture={props.handleFileChange}
          className='hidden'
          {...props.register(props.name, props.rules)}
        />
        <label htmlFor='fileInput'>
          {
            !props.file ?
              <>
                <div className='p-2'>
                  <FaCloudUploadAlt className='mb-4 w-full' />
                  <div className='w-full text-center text-secondaryDark'>Clique aqui ou arraste o arquivo</div>
                </div>
              </>
              :
              props.imagePreview &&
              <Image
                alt='Imagem do personsagem'
                src={props.imagePreview}
                width={160}
                height={224}
              />
          }
        </label>
      </div>
      <ErrorMessage
        errors={props.errors}
        name={props.name}
        render={({ message })=> <p className='error-message'>{ message }</p> }
      />
    </>
  );
};