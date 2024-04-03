'use client';

import { useForm } from 'react-hook-form';
import { Input } from '../basic/inputs';
import { LinkEst } from '../basic/link';
import { ButtonEst } from '../basic/buttons';

interface paramsFormPublic {
  fields: fieldsParams[]  
  submitType: 'login' | 'resetPass' | 'register'
}

interface fieldsParams {
  id:string;
  name:string;
  title: 'Email' | 'Password';
  placeholder:string;
  type:string;
  rules:object;
}

export default function FormPublic (params:paramsFormPublic) {

  const { handleSubmit, register, formState: { errors } } = useForm();

  const onSubmit = (data:any) => {
    console.log(data);
  };

  return (    
    <form className='w-full' onSubmit={ handleSubmit(onSubmit) }>
      {
        params.fields.map((field)=>(
          <div key={field.id}>
            <Input.default
              style={{ fontFamily: 'Londrina Solid, sans-serif' }}
              id={field.id}
              name={field.name}
              title={field.title}
              placeholder={field.placeholder}
              type={field.type}
              rules={field.rules}
              register={ register }
              errors={ errors }
            />
          </div>
        ))
      }

      <div className='-mt-6 mb-4 ml-4 font-light text-grayDark' style={{ fontFamily: 'Londrina Solid, sans-serif' }}>
        <LinkEst
          href='#'
        >
          Esqueceu sua senha?
        </LinkEst>
      </div>
      <div className='flex w-full justify-center'>
        <ButtonEst.smallRound
          id='submitLogin'
          type='submit'
          bgColor='#404040'
          textColor='white'
          text='ENTRAR'
        />
      </div>
    </form>
  );
}