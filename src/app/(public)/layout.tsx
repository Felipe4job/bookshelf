import NextTopLoader from 'nextjs-toploader';
import React from 'react';

export default function LoginLayout ({ children: children } : { children: React.ReactNode }) {
  return (
    <>
      <html lang="pt-BR">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <title>EST - Minha Estante</title>
        </head>
      </html>
      <body>
        <NextTopLoader color='#f6e05e' />
        <div className='flex h-screen w-screen flex-col items-center justify-center bg-white'>
          <div className='col-span-2 w-96 rounded bg-gray50 px-5 py-14 drop-shadow-md'>
            {children}
          </div>
        </div>
      </body>    
    </>
  );
}