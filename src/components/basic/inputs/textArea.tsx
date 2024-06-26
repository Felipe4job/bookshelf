import { ErrorMessage } from '@hookform/error-message';
import { FieldErrorsImpl } from 'react-hook-form';

interface TextAreaProps  {
  id: string;
  name: string;
  title: string;
  register: any;
  errors: FieldErrorsImpl;
  value?: string;
  placeholder: string;
  rules: object;
  readonly?: true;
  rows?: string;
  style?: any;
  marginBot?: string; 
}

export const TextArea = (props:TextAreaProps) => {
  return(
    <>
      <div className={`${props.marginBot ? props.marginBot : 'mb-4'}`}>
        <textarea
          rows={props.rows ? props.rows : '4'}
          style={props.style}
          id={props.id}
          className='block w-full rounded-lg bg-grayExLight p-2.5 text-grayDark focus:bg-white focus:text-black focus:ring-secondaryDark'
          placeholder={props.placeholder}
          readOnly={props.readonly}
          value={props.value}
          {...props.register(props.name, props.rules)}
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