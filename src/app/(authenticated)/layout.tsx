import { Profile } from '@/components/menu/profile';
import { getSession } from '@/libs/auth';
import { Providers } from '@/providers';
import { redirect } from 'next/navigation';
import NextTopLoader from 'nextjs-toploader';
import React from 'react';

export default async function AuthenticatedLayout ({ children: children } : { children: React.ReactNode }) {
  const session = await getSession();
  
  if(!session) redirect('/login');
  
  return (
    session &&
    <>
      <body>
        <NextTopLoader color='#f6e05e' />
        <Providers.authenticated>
          <main className='relative flex h-screen w-screen flex-col overflow-hidden bg-white'>
            <Profile />
            {children}
          </main>
        </Providers.authenticated>
      </body>    
    </>
  );
}