import { ErrorMessage } from '@hookform/error-message';
import { FieldErrorsImpl } from 'react-hook-form';

interface inputsInterface  {
  id: string;
  name: string;
  title: string;
  register: any;
  errors: FieldErrorsImpl;
  type: 'text' | 'email';
  value?: string;
  placeholder: string;
  rules: object;
  readonly?: true;
  rows?: string;
  style?: any;
  marginBot?: string;
  className?: string; 
}

export const TextOrEmailType = (props:inputsInterface) => {
  return(
    <>
      <div className={`${props.marginBot ? props.marginBot : 'mb-4'}`}>
        <input
          style={props.style}
          type={props.type}
          id={props.id}
          className={`block w-full rounded-lg bg-grayExLight p-2.5 text-grayDark focus:bg-white focus:text-black focus:ring-secondaryDark ${props.className}`}
          placeholder={props.placeholder}
          readOnly={props.readonly}
          value={props.value}
          {...props.register(props.name, props.rules)}
        />
      </div>
      <ErrorMessage
        errors={props.errors}
        name={props.name}
        render={({ message }) => <p className='error-message'>{ message }</p> }
      />
    </>
  );
};