import FormLogin from '@/components/forms/login';

export default function Login () {
  return (
    <>
      <h2 
        className='my-10 text-5xl text-grayDark'
        style={{ fontFamily: 'Londrina Solid, sans-serif' }}
      >
        Bem vindo
      </h2>
      <FormLogin />
    </>
  );
}