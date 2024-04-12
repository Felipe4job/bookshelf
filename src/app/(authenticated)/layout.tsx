import { Profile } from '@/components/menu/profile';
import NextTopLoader from 'nextjs-toploader';
import React from 'react';

export default function AuthenticatedLayout ({ children: children } : { children: React.ReactNode }) {
  return (
    <>
      <body>
        <NextTopLoader color='#f6e05e' />
        <main className='flex h-screen w-screen flex-col overflow-auto bg-white'>
          <Profile />
          {children}
        </main>
      </body>    
    </>
  );
}