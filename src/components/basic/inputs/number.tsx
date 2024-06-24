'use client';

import { ErrorMessage } from '@hookform/error-message';
import { useEffect, useState } from 'react';
import { FieldErrorsImpl } from 'react-hook-form';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

interface NumberProps {
  id: string;
  name: string;
  title: string;
  register: any;
  errors: FieldErrorsImpl;
  value?: string;
  placeholder: string;
  rules: object;
  readonly?: true;
  style?: any;
  marginBot?: string;
  // integer: boolean;
}

export const NumberType = (props: NumberProps) => {

  const [ value, setValue ] = useState('0');

  useEffect(()=>{
    if(props.value)
      setValue(props.value);
  }, [ props.value ]);

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value.replace(/[^0-9]/g, '').slice(0, 6));
  };

  return (
    <>
      <div className={`relative ${props.marginBot ? props.marginBot : 'mb-4'}`}>
        <input
          style={props.style}
          type='text'
          onChangeCapture={handleChange}
          id={props.id}
          className='block w-full rounded-lg bg-grayLight p-2.5 text-center text-2xl text-grayDark focus:ring-secondaryDark'
          placeholder={props.placeholder}
          readOnly={props.readonly}
          value={value}
          {...props.register(props.name, props.rules)} 
        />
        <FaArrowUp 
          className='absolute right-2 top-1 cursor-pointer text-primaryDark hover:scale-x-105'
          onClick={
            () => {
              if(parseInt(value) < 999999)
                setValue((parseInt(value) + 1).toString());
            }
          }
        />
        <FaArrowDown 
          className='absolute bottom-1 right-2 cursor-pointer text-primaryDark hover:scale-x-105'
          onClick={
            () => {
              if(parseInt(value) > 0)
                setValue((parseInt(value) - 1).toString());
            }
          }
        />
      </div>
      <ErrorMessage
        errors={props.errors}
        name={props.name}
        render={({ message })=> <p className='error-message'>{ message }</p> }
      />
    </>
  );
};