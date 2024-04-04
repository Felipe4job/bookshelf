'use client';

import { useForm } from 'react-hook-form';
import { Input } from '../basic/inputs';
import { LinkEst } from '../basic/link';
import { ButtonEst } from '../basic/buttons';

interface paramsFormPublic {
  fields: fieldsParams[];  
  submitType: 'login' | 'resetPass' | 'register' | 'forgotPass';
  submit: (data: any)=> void;
}

interface fieldsParams {
  id: string;
  name: string;
  title: 'Email' | 'Password' | 'Name';
  placeholder: string;
  type: string;
  rules: object;
}

export default function FormPublic (params: paramsFormPublic) {

  const { handleSubmit, register, formState: { errors } } = useForm();

  return (    
    <form className='w-full' onSubmit={ handleSubmit(params.submit) }>
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
      <div className='-mt-6 mb-4 ml-4 font-light text-grayDark hover:scale-y-105 hover:text-secondaryDark' style={{ fontFamily: 'Londrina Solid, sans-serif' }}>
        <LinkEst
          href={ params.submitType === 'login' ? '/forgotpass' : '/login' }
        >
          { params.submitType === 'login' ? 'Esqueceu sua senha?' : 'Voltar para o login.' }          
        </LinkEst>
      </div>
      {
        ![ 'register', 'resetPass' ].includes(params.submitType)  &&
        <div className=' my-4 ml-4 font-light text-grayDark hover:scale-y-105 hover:text-secondaryDark' style={{ fontFamily: 'Londrina Solid, sans-serif' }}>
          <LinkEst
            href='/register'
          >
            Registre-se          
          </LinkEst>
        </div>
      }
      <div className='flex w-full justify-center'>
        <ButtonEst.smallRound
          id='submitLogin'
          type='submit'
          bgColor='#404040'
          textColor='white'
          text={ params.submitType === 'login' ? 'ENTRAR' : 'ENVIAR' }
        />
      </div>
    </form>
  );
}