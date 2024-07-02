import { getSession } from '@/libs/auth';
import { redirect } from 'next/navigation';
import NextTopLoader from 'nextjs-toploader';
import React from 'react';

export default async function LoginLayout ({ children: children } : { children: React.ReactNode }) {
  const session = await getSession();
  
  if(session) redirect('/bookshelf');

  return (
    <>
      <body>
        <NextTopLoader color='#f6e05e' />
        <main className='flex h-screen w-screen flex-col items-center justify-center bg-white'>
          <div className='flex h-screen w-screen flex-col items-center rounded bg-primaryExLight px-16 pb-10 drop-shadow-md tablet:h-auto tablet:w-[430px] tablet:px-10'>
            {children}
          </div>
        </main>
      </body>    
    </>
  );
}