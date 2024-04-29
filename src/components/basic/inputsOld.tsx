/* eslint-disable react-hooks/rules-of-hooks */
import { ErrorMessage } from '@hookform/error-message';
import { useState } from 'react';
import { FieldErrorsImpl } from 'react-hook-form';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

interface inputsInterface  {
  id: string;
  name: string;
  title: string;
  register: any;
  errors: FieldErrorsImpl;
  type: string;
  value?: string; 
  eyePass?: boolean;
  seePass?: string;
  placeholder: string;
  rules: object;
  readonly?: true;
  mask?: 'cpf' | 'cnpj';
  acceptable_file_types?: string;
  rows?: string;
  defaultChecked?: boolean;
  style?: any;
  step?: number;
}

export const Input = {
  default: ( params:inputsInterface )=>{
    const [ isPasswordVisible, setIsPasswordVisible ] = useState(false);
    
    const togglePasswordVisibility = ()=>{
      setIsPasswordVisible(!isPasswordVisible);
    };

    return (
      <>
        <div className='mb-8'>
          <input
            style={params.style}
            type={isPasswordVisible ? 'text' : params.type}
            onChange={(e)=> console.log('mudou', e)}
            step={params.step}
            id={params.id}
            className='block w-full rounded-lg bg-grayLight p-2.5 text-center text-2xl text-grayDark focus:ring-secondaryDark'
            placeholder={params.placeholder}
            readOnly={params.readonly}
            value={params.value}
            {...params.register(params.name, params.rules)}
          />
          <ErrorMessage
            errors={params.errors}
            name={params.name}
            render={({ message })=> <p className='pl-4 text-xs italic text-redLight'>{ message }</p> }
          />
        </div>
        {
          params.eyePass &&
          <span className='absolute inset-y-0 right-0 flex items-center px-4 text-grayDark' onClick={togglePasswordVisibility}>
            {isPasswordVisible ? <BsEye /> : <BsEyeSlash/>}
          </span>
        }
      </>
    );
  },
  checkbox: ( params:inputsInterface )=>{
    return (
      <div className='mb-5 flex items-start'>
        <div className='flex h-5 items-center'>
          <input
            type='checkbox'
            id={params.id}
            value={params.value}
            className='size-4 rounded border border-grayLight bg-gray50 focus:ring-secondary'
            readOnly={params.readonly}
            defaultChecked={params.defaultChecked}
            {...params.register(params.name, params.rules)} 
          />
        </div>
        <label 
          htmlFor={params.id} 
          className='mb-2 block text-sm font-medium'
        >
          {params.title}
        </label>
      </div>
    );
  }
};
