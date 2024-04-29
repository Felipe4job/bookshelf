'use client';

import { ErrorMessage } from '@hookform/error-message';
import { FieldErrorsImpl } from 'react-hook-form';

interface inputsInterface  {
  id: string;
  name: string;
  title: string;
  register: any;
  errors: FieldErrorsImpl;
  type: 'date' | 'datetime-local';
  rules: object;
  readonly?: true;
  style?: any;
  marginBot?: string;
}

export const DateType = (props:inputsInterface) => {
  return(
    <>
      <div className={`${props.marginBot ? props.marginBot : 'mb-4'}`}>
        <input
          style={props.style}
          type={props.type}
          id={props.id}
          className='block w-full rounded-lg bg-grayLight p-2.5 text-center text-2xl text-grayDark focus:ring-secondaryDark'
          readOnly={props.readonly}
          value={undefined}
          {...props.register(props.name, props.rules)}
        />
        <ErrorMessage
          errors={props.errors}
          name={props.name}
          render={({ message })=> <p className='pl-4 text-xs italic text-redLight'>{ message }</p> }
        />
      </div>
    </>
  );
};