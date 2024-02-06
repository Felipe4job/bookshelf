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
          <link href="https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@300;400&display=swap" rel="stylesheet" />
          <title>EST - Minha Estante</title>
        </head>
      </html>
      <body>
        <NextTopLoader color='#f6e05e' />
        <div className='flex h-screen w-screen flex-col items-center justify-center bg-white'>
          <div className='flex h-screen w-screen flex-col items-center rounded bg-primaryExLight px-10 drop-shadow-md tablet:h-auto tablet:w-[430px]'>
            {children}
          </div>
        </div>
      </body>    
    </>
  );
}